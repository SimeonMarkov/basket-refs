pipeline {
    agent any

    stages {
        stage('Git checkout') {
            checkout scm
        }

        stage('Build') {
            sh 'gradle clean build'
        }
    }
}