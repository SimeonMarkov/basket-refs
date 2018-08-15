pipeline {
    agent any

    stages {
        stage('Git checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh './gradlew clean build'
            }
        }
    }
}