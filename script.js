$(document).ready(function () {
    
    // Cookie clicker
    var bouton = $('#bouton');
    var affichage = $('#affichage');
    var message = $('#message');
    var multiplicateur = $('#multiplicateur');
    var affichageCompteur = $('#compteur');
    var affichageprixMultiplicateur = $('#prix');    
    var score = 0;
    var compteur = 1;
    var prixMultiplicateur = 50;
    var coefficientMultiplicateur = 2;
    var coutMultiplicateur = prixMultiplicateur;
    var autoclickAmount = 200;

    function afficherScore(){
       affichage.html(score);
    }
    function clic(){
        score = score + compteur;
        afficherScore();
        message.html('');
        message.removeClass('alert alert-danger');
    }
    function afficherMultiplicateur(){
       affichageCompteur.html("x"+compteur);
       affichageprixMultiplicateur.html(" (prix : "+coutMultiplicateur+")");
    }
    function augmenterMultiplicateur(){
        coutMultiplicateur = coutMultiplicateur * coefficientMultiplicateur;
    }
    function incrementer(){
        message.html('');
        if(score >= coutMultiplicateur){
            compteur++;
            score = score - coutMultiplicateur;
            augmenterMultiplicateur();
        }else{
            message.html("Le multiplicateur coûte "+coutMultiplicateur+" points !");
            message.addClass('alert alert-danger');
        }
    }
    function autoclic(){
        if(score >= autoclickAmount){
            clic();
        }
    }
    bouton.click(function(){
        clic();
    });
    multiplicateur.click(function(){
        incrementer();
        afficherScore();
        afficherMultiplicateur();
    });
    afficherScore;
    afficherMultiplicateur();

    setInterval(autoclic, 1000);
    
});