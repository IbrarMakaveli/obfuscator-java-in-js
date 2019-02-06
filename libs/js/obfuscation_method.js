var JAVA_KEYWORD = ["abstract","assert","boolean","break",
"byte","case","catch","char",
"class","const","continue","default",
"do","double","else","enum",
"extends","final","finally","float",
"for","goto","if","implements",
"import","instanceof","int","interface",
"long","native","new","package",
"private","protected","public","return",
"short","static","strictfp","super",
"switch","synchronized","this","throw",
"throws","transient","try","void",
"volatile","while","true","false","null","synchronized",
"Object","Integer","main","args","String",
"System","out","print","println"];

function aleatoire(code){
    code = remove_comment(code)
    add_import(code);
    word_list = unique_in_list(code.split(/\W+/)) // split (regex) par tout ce qui n'est pas une lettre alpahébtique
    for(i in word_list){
        if(JAVA_KEYWORD.includes(word_list[i])==false && isNumeric(word_list[i])==false){ // include utilise la fonction for
            random_val = random_value(25);
            code = code.replace(new RegExp('\\b'+word_list[i]+'\\b(?=(?:(?:[^"]*"){2})*[^"]*$)', 'gm'), random_val);
        }
    }
    return code
}

function overload(code){
    code = remove_comment(code)
    add_import(code);
    word_list = unique_in_list(code.split(/\W+/)) // split (regex) par tout ce qui n'est pas une lettre alpahébtique
    for(i in word_list){
        if(JAVA_KEYWORD.includes(word_list[i])==false && isNumeric(word_list[i])==false){ // include utilise la fonction for
            random_val = random_value(2);
            code = code.replace(new RegExp('\\b'+word_list[i]+'\\b(?=(?:(?:[^"]*"){2})*[^"]*$)', 'gm'), random_val);
        }
    }
    return code
}

// Fontion de traitement

function isNumeric(num){
    return !isNaN(num)
}

function remove_comment(code){
    code = code.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, ''); //retire les commenaitres
    code = code.replace(/\r?\n|\r\s/g,''); //retire les retour et tabs à la ligne
    code = code.replace(/  +/g, ' '); //retire les multispaces à la ligne
    return code;
}

function isNumber(val){
    return true;
}

function unique_in_list(list) {
    var seen = {};
    var out = [];
    var len = list.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = list[i]; // recup valeur de l'objet
         if(seen[item] !== 1 && item!="") { //verifie avec la key dans le dictionnaire si pas présent à 1
               seen[item] = 1;  // ajout dans le dictionnaire avec key à 1
               out[j++] = item; // ajout par rapport à j dans le tableau de sortie
         }
    }
    return out;
}

function add_import(code){
    var import_tab = code.split(";");
    var importList = [];
    for(i in import_tab){
        if(import_tab[i].includes("import") || import_tab[i].includes("package")){
            importList.push(import_tab[i])
        }
    }
    
    for(i in importList){
        import_last = importList[i].split(" ")[1].split(".");
        for(j in import_last){
            JAVA_KEYWORD.push(import_last[j]);
        }
    }
}

function random_value(size) {
    var val = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < size; i++){
        val += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return val;
}