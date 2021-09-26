FROM python:3.8.7

WORKDIR /app

COPY ./hackpi-server .

RUN pip install -r requirements.txt

ENTRYPOINT ["python3", "main.py"]
