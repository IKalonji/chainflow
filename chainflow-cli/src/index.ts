#!/usr/bin/env npx ts-node
import { exec } from 'child_process';

var projectName = "";
const getArgs = () => {
    // We retrieve all the command argumnts except the first 2
    const args = process.argv.slice(2)
    return args
};

const symbols = getArgs();

if(symbols[0] === 'new'){
    if(symbols[1]){
        exec(
            `git clone https://github.com/IKalonji/chainflow-starter-template.git ${symbols[1]} && cd ${symbols[1]} && npm i && cd ..`,
            (error,stdout,stderr)=>{
                if(error){
                    console.log(error);
                }
                if(stdout){
                    console.log(stdout);
                    console.log("Project created. Follow the documentation to configure the project and run the demo")
                }
                if(stderr){
                    console.log(stderr);
                }
            }
        )
    }
}
if(symbols[0] === 'build'){
    if(symbols[1]){
        console.log("Starting the build...Make sure the project was been properly configured")
        exec(
            `cd ${symbols[1]} && npx hardhat run scripts\\deploy.ts && cd ..
            `,
            (error,stdout,stderr)=>{
                if(error){
                    console.log(error);
                }
                if(stdout){
                    console.log(stdout);
                    console.log("Project Built. Follow the documentation to configure the project and run the demo")
                }
                if(stderr){
                    console.log(stderr);
                }
            }
        )
    }
}
if(symbols[0] === 'run'){
    if(symbols[1]){
        console.log("Starting the run...Make sure the project was been properly configured")
        exec(
            `cd ${symbols[1]} && npx hardhat run scripts\\listen.ts && cd ..
            `,
            (error,stdout,stderr)=>{
                if(error){
                    console.log(error);
                }
                if(stdout){
                    console.log(stdout);
                    console.log("Project created. Follow the documentation to configure the project and run the demo")
                }
                if(stderr){
                    console.log(stderr);
                }
            }
        )
    }
}

