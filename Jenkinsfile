@Library("echo-cmd") _

pipeline{
    agent any// {label "vinod"}
    stages{
        stage("calling the hello function"){
            steps{
                script{
                    hello()
                }
            }
        }
        stage("code copy stage"){
            steps{
                script{
                    cloneRepo("https://github.com/botAccAsJohn/tear-repo.git",'main')
                }
            }
        }
        stage("build stage"){
            steps{
                script{
                    build("app")
                }
            }
        }
        // stage("push the build to dockerhub"){
        //     steps{
        //       script{
        //           pushToDockerHub("app")
        //       }
        //     }
        // }
        stage("deploy"){
            steps{
                echo "this is deploying stage..."
                sh "sudo docker-compose up --build -d"
            }
        }
    }
}
