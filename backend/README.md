# Backend

#

`pip install -r requirements.txt`

`python manage.py makemigrations`
`python manage.py migrate`

`python manage.py createsuperuser`

`python manage.py runserver`

#

- User history
- Diagnosis

`python -m gunicorn backend.asgi:application -k uvicorn.workers.UvicornWorker`
