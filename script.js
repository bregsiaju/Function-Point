function FP() {
    //Tabel Tipe Input
    var inputS = parseInt(document.getElementById('jml_is').value);
    var totalis = 3 * inputS;
    document.getElementById('t_is').value = totalis;

    var inputM = parseInt(document.getElementById('jml_im').value);
    var totalim = 4 * inputM;
    document.getElementById('t_im').value = totalim;

    var inputK = parseInt(document.getElementById('jml_ik').value);
    var totalik = 6 * inputK;
    document.getElementById('t_ik').value = totalik;

    var tcfpi = totalis + totalim + totalik;
    document.getElementById('t_cfpi').value = tcfpi;


    //Tabel Tipe Output
    var outputS = parseInt(document.getElementById('jml_os').value);
    var totalos = 4 * outputS;
    document.getElementById('t_os').value = totalos;

    var outputM = parseInt(document.getElementById('jml_om').value);
    var totalom = 5 * outputM;
    document.getElementById('t_om').value = totalom;

    var outputK = parseInt(document.getElementById('jml_ok').value);
    var totalok = 7 * outputK;
    document.getElementById('t_ok').value = totalok;

    var tcfpo = totalos + totalom +totalok;
    document.getElementById('t_cfpo').value = tcfpo;


    //Tabel Query/Search/View
    var qsvS = parseInt(document.getElementById('jml_qsvs').value);
    var totalqsvs = 3 * qsvS;
    document.getElementById('t_qsvs').value = totalqsvs;

    var qsvM = parseInt(document.getElementById('jml_qsvm').value);
    var totalqsvm = 4 * qsvM;
    document.getElementById('t_qsvm').value = totalqsvm;

    var qsvK = parseInt(document.getElementById('jml_qsvk').value);
    var totalqsvk = 6 * qsvK;
    document.getElementById('t_qsvk').value = totalqsvk;

    var tcfpqsv = totalqsvs + totalqsvm + totalqsvk;
    document.getElementById('t_cfpqsv').value = tcfpqsv;



    //Tabel File/Table/Database
    var ftdS = parseInt(document.getElementById('jml_ftds').value);
    var totalftds = 7 * ftdS;
    document.getElementById('t_ftds').value = totalftds;

    var ftdM = parseInt(document.getElementById('jml_ftdm').value);
    var totalftdm = 10 * ftdM;
    document.getElementById('t_ftdm').value = totalftdm;

    var ftdK = parseInt(document.getElementById('jml_ftdk').value);
    var totalftdk = 15 * ftdK;
    document.getElementById('t_ftdk').value = totalftdk;

    var tcfpftd = totalftds + totalftdm + totalftdk;
    document.getElementById('t_cfpftd').value = tcfpftd;



    //Tabel Interface Eksternal
    var inputeS = parseInt(document.getElementById('jml_ies').value);
    var totalies = 5 * inputeS;
    document.getElementById('t_ies').value = totalies;

    var inputeM = parseInt(document.getElementById('jml_iem').value);
    var totaliem = 7 * inputeM;
    document.getElementById('t_iem').value = totaliem;

    var inputeK = parseInt(document.getElementById('jml_iek').value);
    var totaliek = 10 * inputeK;
    document.getElementById('t_iek').value = totaliek;

    var tcfpie = totalies + totaliem + totaliek;
    document.getElementById('t_cfpie').value = tcfpie;


    //Total Keseluruhan CFP
    var tcfp = tcfpi + tcfpo + tcfpqsv + tcfpftd + tcfpie;
    document.getElementById('t_cfp').value = tcfp;

    

    //Total RCAF
    var rcaf1 = parseInt(document.getElementById('rcaf1').value);
    var rcaf2 = parseInt(document.getElementById('rcaf2').value);
    var rcaf3 = parseInt(document.getElementById('rcaf3').value);
    var rcaf4 = parseInt(document.getElementById('rcaf4').value);
    var rcaf5 = parseInt(document.getElementById('rcaf5').value);
    var rcaf6 = parseInt(document.getElementById('rcaf6').value);
    var rcaf7 = parseInt(document.getElementById('rcaf7').value);
    var rcaf8 = parseInt(document.getElementById('rcaf8').value);
    var rcaf9 = parseInt(document.getElementById('rcaf9').value);
    var rcaf10 = parseInt(document.getElementById('rcaf10').value);
    var rcaf11 = parseInt(document.getElementById('rcaf11').value);
    var rcaf12 = parseInt(document.getElementById('rcaf12').value);
    var rcaf13 = parseInt(document.getElementById('rcaf13').value);
    var rcaf14 = parseInt(document.getElementById('rcaf14').value);

    var totalrcaf= rcaf1 + rcaf2 + rcaf3 + rcaf4 + rcaf5 + rcaf6 + rcaf7 + rcaf8 + rcaf9 + rcaf10 + rcaf11 + 
    rcaf12 + rcaf13 +rcaf14;

    document.getElementById('total_rcaf').value = totalrcaf;



    //Hasil CFP
    var hasil_cfp = tcfp *(0.65 + (0.01 * totalrcaf));
    document.getElementById('hasil_cfp').value = hasil_cfp.toFixed(2);
}