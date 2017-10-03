# gcf-current-time
Report the current time as JSON, using Google Cloud Functions.

Documentation: https://cloud.google.com/functions/docs/tutorials/http

Uses the [Express API](http://expressjs.com/en/api.html).

## Commands
    export YOUR_PROJECT=fdb-learn-gcp
    export YOUR_BUCKET=fdb-current-time
    gsutil mb -p $YOUR_PROJECT gs://$YOUR_BUCKET
    gcloud beta functions deploy currentTime --stage-bucket $YOUR_BUCKET --trigger-http
