OC.L10N.register(
    "ocr",
    {
    "Afrikaans" : "Africâner",
    "Arabic" : "Árabe",
    "Azerbaijani" : "Azerbaijanês",
    "Belarusian" : "Bielorrusso",
    "Bengali" : "Bengali",
    "Bulgarian" : "Búlgaro",
    "Catalan" : "Catalão",
    "Czech" : "Tcheco",
    "Chinese" : "Chinês",
    "Traditional Chinese" : "Chinês Tradicional",
    "Cherokee" : "Cherokee",
    "Danish" : "Dinamarquês",
    "German" : "Alemão",
    "Greek" : "Grego",
    "English" : "Inglês",
    "English (Old)" : "Inglês (Antigo)",
    "Esperanto" : "Esperanto",
    "Esperanto alternative" : "Esperanto alternativo",
    "Math" : "Matemática",
    "Estonian" : "Estoniano",
    "Basque" : "Basco",
    "Persian (Farsi)" : "Persa (Farsi)",
    "Finnish" : "Finlandês",
    "French" : "Francês",
    "Frankish" : "Franco",
    "French (Old)" : "Francês (Antigo)",
    "Galician" : "Galego",
    "Ancient Greek" : "Grego Antigo",
    "Hebrew" : "Hebreu",
    "Hindi" : "Hindi",
    "Croatian" : "Croata",
    "Hungarian" : "Húngaro",
    "Indonesian" : "Indonésio",
    "Icelandic" : "Islandês",
    "Italian" : "Italiano",
    "Italian (Old)" : "Italiano (Antigo)",
    "Japanese" : "Japonês",
    "Kannada" : "Canará",
    "Korean" : "Coreano",
    "Latvian" : "Letão",
    "Lithuanian" : "Lituano",
    "Malayalam" : "Malaiala",
    "Macedonian" : "Macedônio",
    "Maltese" : "Maltês",
    "Malay" : "Malaio",
    "Dutch" : "Holandês",
    "Norwegian" : "Norueguês",
    "Polish" : "Polonês",
    "Portuguese" : "Português",
    "Romanian" : "Romeno",
    "Russian" : "Russo",
    "Slovakian" : "Eslovaco",
    "Slovenian" : "Esloveno",
    "Spanish" : "Espanhol",
    "Old Spanish" : "Espanhol Antigo",
    "Albanian" : "Albanês",
    "Serbian (Latin)" : "Sérvio (Latim)",
    "Swahili" : "Suaíli",
    "Swedish" : "Sueco",
    "Tamil" : "Tâmil",
    "Telugu" : "Télugo",
    "Tagalog" : "Tagalo",
    "Thai" : "Tailandês",
    "Turkish" : "Turco",
    "Ukrainian" : "Ucraniano",
    "Vietnamese" : "Vietnamita",
    "OCR" : "OCR",
    "Target file already exists:" : "O arquivo de destino já existe:",
    "An unexpected error occured during the upload of the processed file." : "Um erro ocorreu durante o envio do arquivo processado.",
    "An unexpected error occured during the deletion of the original file." : "Um erro ocorreu durante a exclusão do arquivo original.",
    "An unexpected error occured during Tesseract processing." : "Um erro ocorreu durante o processamento do Tesseract.",
    "PDF does not contain any Pages to process." : "O PDF não contém nenhuma página a processar.",
    "An unexpected error occured during pdf processing." : "Um erro ocorreu durante o processamento do PDF.",
    "OCR processing failed:" : "Falha ao processar OCR:",
    "No file selected." : "Nenhum arquivo selecionado.",
    "MIME type not supported." : "Tipo MIME não suportado.",
    "Press to select" : "Pressione para selecionar",
    "No matches found" : "Nenhuma correspondência encontrada",
    "Select language" : "Selecionar idioma",
    "Process" : "Processar",
    "PDF files and a large number of files may take a very long time." : "Arquivos PDF e um grande número de arquivos podem levar muito tempo.",
    "{file}/{files} Files successfully processed" : "{file}/{files} Arquivos processados com sucesso",
    "_%n file is being processed:_::_%n files are being processed:_" : ["%n arquivo sendo processado:","%n arquivos sendo processados:"],
    "_Replace (PDF) or delete (image) original file_::_Replace (PDF) or delete (images) original files_" : ["Substituir (PDF) ou excluir o arquivo original (imagem)","Substituir (PDF) ou excluir os arquivos originais (imagens)"],
    "_%n file_::_%n files_" : ["%n arquivo","%n arquivos"],
    "Optical character recognition" : "Reconhecimento ótico de caracteres",
    "Text recognition for your images and pdf files" : "Reconhecimento de texto para suas imagens e arquivos pdf",
    "# Description\n\nNextcloud OCR (optical character recognition) processing for images and PDF with tesseract-js brings OCR capability to your Nextcloud.\nThe app uses tesseract-js in the browser in order to process images (png, jpeg, tiff) and PDFs and saves the output file to the source folder in nextcloud. That for example enables you to search in it.\n\n## Prerequisites, Requirements and Dependencies\nThe OCR app has some prerequisites:\n\n - [Nextcloud 15 or 16](https://nextcloud.com/)\n\n - Only supported on latest modern web browsers (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_* On Safari there is currently a problem with the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), that requires an Administrator to set the 'script-src' to 'unsafe-eval' such that the app works properly. Because this is quite insecure the app itself does not set it and recommends to decide that on your own risk (please make sure, that you know what CSP is and what e.g. unsafe-eval causes)._\n\n## Installation\nInstall the app from the [Nextcloud AppStore](http://apps.nextcloud.com) or download the release package from github (**NOT** the sources) and place the content in **nextcloud/apps/ocr/**.\n\n## Disclaimer\nThe software is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR\nCONDITIONS OF ANY KIND, either express or implied.\n\n## Consideration\nThe version 3 and earlier versions are not supported/maintained anymore by the author. So for asynchronous background processing please fork the repository and use the \"not-maintained\" branch to work on improvements. The author wasn't able to support it because of too much effort." : "# Descrição\n\nO processamento de OCR (reconhecimento ótico de caracteres) do Nextcloud para imagens e PDF com o tesseract-js traz a capacidade de OCR para o seu Nextcloud.\nO aplicativo usa tesseract-js no navegador para processar imagens (png, jpeg, tiff) e PDFs e salva o arquivo de saída na pasta de origem em nextcloud. Isso, por exemplo, permite que você pesquise nele.\n\n## Pré-requisitos, Requisitos e Dependências\nO aplicativo OCR tem alguns pré-requisitos:\n\n - [Nextcloud 15 ou 16](https://nextcloud.com/)\n\n - Suportado apenas nos navegadores mais recentes (Chrome, Edge, Firefox, Opera, Safari*)\n\n\n_* No Safari, há atualmente um problema com a [Política de segurança de conteúdo] (https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), que requer que um administrador defina 'script-src' para 'unsafe-eval' para o aplicativo funcionar corretamente. Como isso é bastante inseguro, o aplicativo em si não o define e recomenda decidir por sua conta e risco (certifique-se de que você sabe o que é CSP e o que causa unsafe-eval)._\n\n## Instalação\nInstale o aplicativo do [Nextcloud AppStore](http://apps.nextcloud.com) ou faça o download do pacote do github (**NÃO** os fontes) e coloque o conteúdo em **nextcloud/apps/ocr/**.\n\n## Aviso\nO software é distribuído \"COMO ESTÁ\", SEM GARANTIAS OU\nCONDIÇÕES DE QUALQUER TIPO, expressas ou implícitas.\n\n## Consideração\nA versão 3 e versões anteriores não são suportadas/mantidas pelo autor. Portanto, para o processamento assíncrono em segundo plano, bifurque o repositório e use a ramificação \"não mantida\" para trabalhar nas melhorias. O autor não pôde apoiá-lo por causa de muito trabalho."
},
"nplurals=2; plural=(n > 1);");
