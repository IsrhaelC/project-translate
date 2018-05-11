var fs = require('fs');
var nrc = require('node-run-cmd');
var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');
var execSync = require('child_process').execSync;

export class TranslateService{

    pathRepositorio = "";

    constructor(pathRepositorio){
        this.pathRepositorio = pathRepositorio;
    }

    readWriteSync(caminhoArquivo, textoOriginal, textoTraduzido) {
    
        fs.readFile(caminhoArquivo, 'utf-8', function(err, data){
            if (err) throw err;
        
            var newValue = data.replace(`/^${textoOriginal}$/`, textoTraduzido);
        
            fs.writeFile(caminhoArquivo, newValue, 'utf-8', function (err) {
              if (err) throw err;
              console.log('filelistAsync complete');
            });
        });
    }
    
    getFilesFromRepo(){
        return execSync('git ls-files', { 
            encoding: 'utf8', 
            cwd: this.pathRepositorio 
        })
        .split('\n')
        .slice(0, -1);
    }
    
    checkoutBranch(branchName){
        execSync(`git checkout ${branchName}`, { 
            encoding: 'utf8', 
            cwd: this.pathRepositorio
        })
        .split('\n')
        .slice(0, -1);
    }
    
    createBranch(branchName){
        execSync(`git checkout -b ${branchName}`, { 
            encoding: 'utf8', 
            cwd: this.pathRepositorio 
        })
        .split('\n')
        .slice(0, -1);
    }
    
    commitBranch(branchName, commitMsg){
        var commands = [
            `git add .`,
            `git commit -m \"${commitMsg}\"`
        ];
        var options = { cwd: this.pathRepositorio };
        nrc.run(commands, options);
    }
    
    translateText(texto, languageSource, languageDest) {
        var languageTranslator = new LanguageTranslatorV2({
            username: '377ee1b7-a14a-4840-b24c-462392821e51',
            password: 'js14Rc5L2deX',
            url: 'https://gateway.watsonplatform.net/language-translator/api/'
        });
    
        languageTranslator.translate(
            {
              text: texto,
              source: languageSource,
              target: languageDest
            },
            function(err, translation) {
              if (err)  {
                console.log('error:', err);
              } else  {
                console.log(JSON.stringify(translation, null, 2));
              }
            }
        );
    }
}