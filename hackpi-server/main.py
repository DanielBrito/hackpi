import pandas as pd
import numpy as np
from pandas import Series
from flask import Flask
import json
import os
from flask_cors import CORS

dataframe = pd.read_csv("dataset/dataset_prof.csv", skiprows=1)

q_labels = {
    "1": "Discordo Totalmente",
    "2": "Discordo",
    "3": "Neutro",
    "4": "Concordo",
    "5": "Concordo totalmente",
    "6": "Nao sabe"
}

label_questionnaire = {
    "1": "Não",
    "2": "Sim",
    "3": "Outro"
}


def extract_impairment_data():
    def _filter(v: str):
        return v.isnumeric() and v != '9998' and v != '9999'

    serie: Series = dataframe.iloc[:, 385].astype(dtype=str, copy=True, errors="ignore")
    values = [int(v) for v in serie.values if _filter(v)]
    count_1 = sum(values)
    serie: Series = dataframe.iloc[:, 396].astype(dtype=str, copy=True, errors="ignore")
    values = [int(v) for v in serie.values if _filter(v)]
    count_2 = sum(values)
    return [{
        "title": "Há crianças com deficiências X Profissionais na unidade dedicados somente ao trabalho com crianças comdeficiência?",
        "data": [
            {
                "x": "Crianças com deficiências",
                "y": count_1,
            },
            {
                "x": "Profissionais na unidade dedicados",
                "y": count_2
            }
        ]
    }]


extract_impairment_data()


def extract_data_from_question(question, labels=q_labels):
    serie: Series = dataframe.iloc[:, question["column_number"]]
    serie = serie.dropna()
    count = serie.value_counts()
    data = count.to_dict()
    del data[question["header_name"]]
    data = [{"x": i, "y": data[i]} for i in list(data.keys())]
    data.sort(key=lambda a: a["x"])
    data = [{"x": labels[d["x"]], "y": d["y"]} for d in data]
    return {
        "data": data,
        "title": question["title"]
    }


questions = [
    # {
    #     "title": "Meu trabalho é desenvolvido colaborativamente com a gestão da UE",
    #     "column_number": 232,
    #     "header_name": "ep_q26",
    #     "map_labels": q_labels
    # },
    # {
    #     "title": "Os materiais de apoio disponibilizados pela Secretaria Estadual colaboram para o exercício da minha profissão (considere os do ciclo formativo, brincando em família e o material estruturado da Nova Escola)",
    #     "column_number": 231,
    #     "header_name": "ep_q24",
    #     "map_labels": q_labels
    # },
    {
        "title": "Me sinto preparada(o) para educar crianças com deficiências, TEA ou altas habilidades",
        "column_number": 237,
        "header_name": "ep_q31",
        "map_labels": q_labels
    },
    {
        "title": "Há crianças com diversidades funcionais, transtornos globais do desenvolvimento, altas habilidades ou superdotação nesta turma?",
        "column_number": 21,
        "header_name": "od_q2",
        "map_labels": label_questionnaire,
    },
]

lazer_labes = {
    "1": "Nada observado",
    "2": "Apenas atividades definidas pelo professor",
    "3": "Crianças exploram apenas uma atividade de interação",
    "4": "Crianças exploram apenas duas ou mais atividade de interação"
}

lazer_questions = [
    {
        "title": "Oportunidades de aprendizagens que envolvem práticas sociais com espaços, tempos, objetos e suas relações",
        "column_number": 39,
        "header_name": "od_q19",
        "map_labels": lazer_labes
    }, {
        "title": "Oportunidades de aprendizagens que ampliam a expressão e a criação por meio das linguagens plásticas",
        "column_number": 43,
        "header_name": "od_q23",
        "map_labels": lazer_labes
    }, {
        "title": "Oportunidades de aprendizagens que promovem os movimentos amplos e gestos das crianças em jogos e brincadeiras",
        "column_number": 45,
        "header_name": "od_q25",
        "map_labels": lazer_labes
    }, {
        "title": "Momentos de brincadeira livre",
        "column_number": 47,
        "header_name": "od_q27",
        "map_labels": lazer_labes
    },
]

development_labels = {
    "1": "Nao Promove",
    "2": "Promove, mas poderia ser melhor",
    "3": "Promove",
    "4": "Nao sabe, Nao respondeu",
    "Aposentadoria": "0",
    "Estudar retomar mestrado": "0"
}

development_questions = [
    {
        "title": "De modo geral, você acredita que a rede de educação infantil do seu município está promovendo as condições para o desenvolvimento integral das crianças? - Professor",
        "column_number": 243,
        "header_name": "ep_q36",
        "map_labels": development_labels
    }, {
        "title": "De modo geral, você acredita que a rede de educação infantil do seu município está promovendo as condições para o desenvolvimento integral das crianças? - Diretor",
        "column_number": 332,
        "header_name": "ed_q21",
        "map_labels": development_labels
    },
]

result = [extract_data_from_question(question, question["map_labels"]) for question in questions]
result = result + extract_impairment_data()


def x(q):
    x4 = extract_data_from_question(q, q["map_labels"])
    if "Aposentadoria" in x4:
        del x4["Aposentadoria"]
    if "Estudar retomar mestrado" in x4:
        del x4["Estudar retomar mestrado"]
    return x4


lazer_result = [extract_data_from_question(q, q["map_labels"]) for q in lazer_questions]
development_result = [x(q) for q in development_questions]
final_development_result = []
for i in range(len(development_result)):
    final_development_result.append({
        "data": [],
        "title": development_result[i]["title"]
    })
    for j in range(len(development_result[i]["data"])):
        if development_result[i]["data"][j]["x"] == "0":
            continue
        final_development_result[i]["data"].append(development_result[i]["data"][j])
app = Flask(__name__)
CORS(app)


@app.after_request
def apply_caching(response):
    response.headers["Content-Type"] = "text/json; charset=utf-8"
    return response


@app.route("/inclusion")
def inclusion():
    return json.dumps(result)


@app.route("/lazer")
def lazer():
    return json.dumps(lazer_result)


@app.route("/development")
def development():
    return json.dumps(final_development_result)


app.run(port=int(os.getenv("PORT", "3333")), host="0.0.0.0")
