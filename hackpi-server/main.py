import pandas as pd
import numpy as np
from pandas import Series
from flask import Flask
import json

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
    return {
        "data": [{"x": labels[i], "y": data[i]} for i in list(data.keys())],
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
    "3": "Criancas exploram apenas uma atividade de interacao",
    "4": "Criancas exploram apenas duas ou mais atividade de interacao"
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

result = [extract_data_from_question(question, question["map_labels"]) for question in questions]
result = result + extract_impairment_data()

lazer_result = [extract_data_from_question(q, q["map_labels"]) for q in lazer_questions]
app = Flask(__name__)


@app.route("/inclusion")
def inclusion():
    return json.dumps(result)


@app.route("/lazer")
def lazer():
    return json.dumps(lazer_result)


app.run(port=3333)