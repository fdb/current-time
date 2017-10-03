# gcf-current-time
Report the current time as JSON, using Google Cloud Functions.

Documentation: https://cloud.google.com/functions/docs/tutorials/http

Uses the [Express API](http://expressjs.com/en/api.html).

## Commands
    gsutil mb -p fdb-learn-gcp gs://fdb-current-time
    gcloud beta functions deploy currentTime --stage-bucket fdb-current-time --trigger-http
