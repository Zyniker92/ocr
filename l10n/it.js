OC.L10N.register(
    "ocr",
    {
    "OCR" : "OCR",
    "Optical character recognition" : "Riconoscimento ottico dei caratteri",
    "Text recognition for your images and pdf files" : "Riconoscimento del testo per immagini e file pdf",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff, bmp) and saves the output PDF file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 16 and up](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n - Tesseract traineddata needs about 200 MB space on your server (will be installed automatically).\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](https://apps.nextcloud.com/apps/ocr) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Note\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort.\nMoreover this project is based on a webassembly port of tesseract. The maintainer stopped working on PDF processing in this app and will start working on separate app for pdf handling." : "# Descrizione\n\nL'elaborazione OCR (riconoscimento ottico dei caratteri) di Nextcloud per immagini con tesseract-js porta le capacità OCR nel tuo Nextcloud.\nL'applicazione usa tesseract-js nel browser per elaborare immagini (png, jpeg, tiff, bmp) e salva il file PDF risultante nella cartella dei sorgenti di nextcloud. Ciò ti consente, ad esempio, di effettuare ricerche nel file.\n\n## Prerequisiti, requisiti e dipendenze\nL'applicazione OCR ha alcuni prerequisiti:\n\n - [Nextcloud 16 o superiore](https://nextcloud.com/)\n\n - Supportata solo sui più recenti browser web moderni (Chrome, Edge, Firefox, Opera, Safari*)\n\n- I dati di addestramento di Tesseract richiedono circa 200 MB di spazio sul tuo server (saranno installati automaticamente)\n\n\n_* Su Safari al momento c'è un problema con la [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), che richiede un amministratore per impostare 'script-src' a 'unsafe-eval' per far funzionare correttamente l'applicazione. Poiché ciò non è molto sicuro, l'applicazione stessa non lo imposta e lo lascia decidere a proprio rischio e pericolo (assicurati di sapere cos'è CSP e cosa implica unsafe-eval)._\n\n## Installazione\nInstalla l'applicazione dal [negozio Nextcloud](http://apps.nextcloud.com/apps/ocr) o scarica il pacchetto da github (**NON** i sorgenti) e spostane il contenuto in **nextcloud/apps/ocr/**.\n\n## Esclusione di responsabilità\nIl software è distribuito \"COSÌ COM'È\", SENZA\nGARANZIE O\nCONDIZIONI DI QUALSIASI TIPO, esplicite o implicite.\n\n## Nota\nLa versione 3 e le precedenti non sono più supportate/mantenute dall'autore. Quindi per l'elaborazione asincrona in background, crea un fork del repository e usa il branch \"not-maintained\" per migliorarlo. L'autore non è stato in grado di supportarlo perché richiede troppo impegno.\nInoltre, questo progetto è basato sulla conversione webassembly di tesseract. L'autore ha interrotto lo sviluppo dell'elaborazione PDF in questa applicazione e inizierà a lavorare su un'applicazione separata per la gestione dei PDF.",
    "Target file already exists:" : "Il file di destinazione esiste già",
    "An unexpected error occured during the load of your favorite languages. No language will be set instead." : "Si è verificato un errore durante il caricamento delle tue lingue preferite. Non sarà impostata alcuna lingua.",
    "An unexpected error occured during the upload of the processed file." : "Si è verificato un errore durante il caricamento del file elaborato.",
    "An unexpected error occured during the deletion of the original file." : "Si è verificato un errore durante l'eliminazione del file originale.",
    "An unexpected error occured during Tesseract processing." : "Si è verificato un errore durante l'elaborazione Tesseract.",
    "OCR processing failed:" : "Elaborazione OCR non riuscita:",
    "MIME type not supported." : "Tipo di MIME non supportato.",
    "Process" : "Elabora",
    "A large number of files may take a very long time." : "Un gran numero di file potrebbe richiedere molto tempo.",
    "{file}/{files} Files successfully processed" : "{file}/{files} file elaborati correttamente",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n file è stato elaborato:","%n file sono stati elaborati:"],
    "_Delete original file (image)_::_Delete original files (images)_" : ["Elimina il file originale (immagine)","Elimina i file originali (immagini)"],
    "_%n file_::_%n files_" : ["%n file","%n file"],
    "Afrikaans" : "Afrikaans",
    "Arabic" : "Arabo",
    "Azerbaijani" : "Azero",
    "Belarusian" : "Bielorusso",
    "Bengali" : "Bengali",
    "Bulgarian" : "Bulgaro",
    "Catalan" : "Catalano",
    "Czech" : "Ceco",
    "Chinese" : "Cinese",
    "Traditional Chinese" : "Cinese tradizionale",
    "Cherokee" : "Cherokee",
    "Danish" : "Danese",
    "German" : "Tedesco",
    "Greek" : "Greco",
    "English" : "Inglese",
    "English (Old)" : "Inglese (antico)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Esperanto alternativo",
    "Math" : "Matematica",
    "Estonian" : "Estone",
    "Basque" : "Basco",
    "Persian (Farsi)" : "Persiano (Farsi)",
    "Finnish" : "Finlandese",
    "French" : "Francese",
    "Frankish" : "Franco",
    "French (Old)" : "Francese (antico)",
    "Galician" : "Galiziano",
    "Ancient Greek" : "Greco antico",
    "Hebrew" : "Ebreo",
    "Hindi" : "Hindi",
    "Croatian" : "Croato",
    "Hungarian" : "Ungherese",
    "Indonesian" : "Indonesiano",
    "Icelandic" : "Islandese",
    "Italian" : "Italiano",
    "Italian (Old)" : "Italiano (antico)",
    "Japanese" : "Giapponese",
    "Kannada" : "Kannada",
    "Korean" : "Coreano",
    "Latvian" : "Lettone",
    "Lithuanian" : "Lituano",
    "Malayalam" : "Malayalam",
    "Macedonian" : "Macedone",
    "Maltese" : "Maltese",
    "Malay" : "Malese",
    "Dutch" : "Olandese",
    "Norwegian" : "Norvegese",
    "Polish" : "Polacco",
    "Portuguese" : "Portoghese",
    "Romanian" : "Rumeno",
    "Russian" : "Russo",
    "Slovakian" : "Slovacco",
    "Slovenian" : "Sloveno",
    "Spanish" : "Spagnolo",
    "Old Spanish" : "Spagnolo antico",
    "Albanian" : "Albanese",
    "Serbian (Latin)" : "Serbo (Latino)",
    "Swahili" : "Swahili",
    "Swedish" : "Svedese",
    "Tamil" : "Tamil",
    "Telugu" : "Telugu",
    "Tagalog" : "Tagalog",
    "Thai" : "Thai",
    "Turkish" : "Turco",
    "Ukrainian" : "Ucraino",
    "Vietnamese" : "Vietnamita",
    "Press enter to select" : "Premi Invio per selezionare",
    "Press enter to remove" : "Premi Invio per rimuovere",
    "Selected" : "Selezionati",
    "No matches found" : "Nessuna corrispondenza trovata",
    "Select language" : "Seleziona lingua",
    "Save" : "Salva",
    "An unexpected error occured during save of your favorite languages. Please try again." : "Si è verificato un errore durante il salvataggio delle tue lingue preferite. Prova ancora.",
    "An unexpected error occured during load of your favorite languages. Please try again." : "Si è verificato un errore durante il caricamento delle tue lingue preferite. Prova ancora.",
    "An error occured during save of your favorite languages. Please check your input." : "Si è verificato un errore durante il salvataggio delle tue lingue preferite. Controlla le informazioni inserite.",
    "Selected languages will be preselected by default in the OCR dialog." : "Le lingue selezionate saranno preselezionate in modo predefinito nella finestra OCR.",
    "Favorite languages" : "Lingue preferite"
},
"nplurals=2; plural=(n != 1);");
