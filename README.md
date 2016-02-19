# minimesos.org
This is the source repository for minimesos.org using [hugo](https://gohugo.io)

# Updating
After changes have been made run ```make deploy```

changes to this repo will not sync the website automatically

# Configuration

For deploy to work, you have to have aws client installed and setup with the credentials owning the S3  bucket with the source files.

## Caveats

Current setup with AWS Lambda causes issues when a lot of files are changed at once. Then, hugo is fired multiple times and it's sensitive to content/ and static/ folders.

Also, ```aws sync``` will not create a directory if it's empty on your machine, but hugo needs content/ folder to generate site properly, so it has to contain a (dummy) file for aws to create this dir.
