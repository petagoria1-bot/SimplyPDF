import {
  Merge,
  Split,
  Minimize2,
  RotateCw,
  FileImage,
  Unlock,
  Lock,
  Layers,
  Stamp,
  FileSignature,
  Type,
  FileText,
  FileUp,
  FileDown,
  ScanLine,
  Zap,
  Shield,
  HelpCircle,
  Wrench,
  Scissors,
  Trash2,
  GripVertical,
  Copy,
  PlusCircle,
  Globe,
  BookOpen,
  ImagePlus,
  Table as TableIcon,
  Presentation,
} from "lucide-react";

export const tools = [
  {
    title: "Fusionner PDF",
    description: "Combinez plusieurs PDF en un seul",
    icon: Merge,
    href: "/merge-pdf",
    featured: true,
  },
  {
    title: "Diviser PDF",
    description: "Séparez les pages en plusieurs fichiers",
    icon: Split,
    href: "/split-pdf",
    featured: true,
  },
  {
    title: "Compresser PDF",
    description: "Réduisez la taille de vos PDF",
    icon: Minimize2,
    href: "/compress-pdf",
    featured: true,
  },
  {
    title: "Extraire des pages",
    description: "Extrayez des pages précises d’un PDF",
    icon: Scissors,
    href: "/extract-pages",
  },
  {
    title: "Supprimer des pages",
    description: "Supprimez les pages inutiles d’un PDF",
    icon: Trash2,
    href: "/delete-pages",
  },
  {
    title: "Réorganiser les pages",
    description: "Modifiez l’ordre des pages d’un PDF",
    icon: GripVertical,
    href: "/reorder-pages",
  },
  {
    title: "Pivoter PDF",
    description: "Faites pivoter les pages dans la direction souhaitée",
    icon: RotateCw,
    href: "/rotate-pdf",
  },
  {
    title: "Dupliquer des pages",
    description: "Dupliquez des pages dans un même PDF",
    icon: Copy,
    href: "/duplicate-pages",
  },
  {
    title: "Insérer des pages",
    description: "Ajoutez des pages provenant d’autres PDF",
    icon: PlusCircle,
    href: "/insert-pages",
  },
  {
    title: "JPG vers PDF",
    description: "Convertissez vos images en PDF",
    icon: ImagePlus,
    href: "/jpg-to-pdf",
    featured: true,
  },
  {
    title: "PDF vers JPG",
    description: "Extrayez les images d’un PDF",
    icon: FileImage,
    href: "/pdf-to-jpg",
  },
  {
    title: "Word vers PDF",
    description: "Convertissez un document Word en PDF",
    icon: FileUp,
    href: "/word-to-pdf",
    featured: true,
  },
  {
    title: "PDF vers Word",
    description: "Convertissez un PDF en document Word",
    icon: FileText,
    href: "/pdf-to-word",
  },
  {
    title: "Excel vers PDF",
    description: "Convertissez un document Excel en PDF",
    icon: TableIcon,
    href: "/excel-to-pdf",
  },
  {
    title: "PDF vers Excel",
    description: "Convertissez un PDF en Excel",
    icon: FileDown,
    href: "/pdf-to-excel",
  },
  {
    title: "PowerPoint vers PDF",
    description: "Convertissez un PowerPoint en PDF",
    icon: Presentation,
    href: "/powerpoint-to-pdf",
  },
  {
    title: "PDF vers PowerPoint",
    description: "Convertissez un PDF en PowerPoint",
    icon: Presentation,
    href: "/pdf-to-powerpoint",
  },
  {
    title: "Web vers PDF",
    description: "Transformez une page web en PDF",
    icon: Globe,
    href: "/html-to-pdf",
  },
  {
    title: "PDF vers HTML",
    description: "Convertissez un PDF en HTML",
    icon: Globe,
    href: "/pdf-to-html",
  },
  {
    title: "Texte vers PDF",
    description: "Convertissez du texte en PDF",
    icon: FileText,
    href: "/text-to-pdf",
  },
  {
    title: "PDF vers texte",
    description: "Extrayez le texte d’un PDF",
    icon: FileText,
    href: "/pdf-to-text",
  },
  {
    title: "EPUB vers PDF",
    description: "Convertissez un EPUB en PDF",
    icon: BookOpen,
    href: "/epub-to-pdf",
  },
  {
    title: "PDF vers EPUB",
    description: "Convertissez un PDF en EPUB",
    icon: BookOpen,
    href: "/pdf-to-epub",
  },
  {
    title: "Déverrouiller PDF",
    description: "Supprimez les restrictions d’un PDF",
    icon: Unlock,
    href: "/unlock-pdf",
  },
  {
    title: "Protéger PDF",
    description: "Protégez avec un mot de passe",
    icon: Lock,
    href: "/protect-pdf",
  },
  {
    title: "Organiser PDF",
    description: "Réorganisez et supprimez des pages",
    icon: Layers,
    href: "/organize-pdf",
  },
  {
    title: "Filigrane",
    description: "Ajoutez un filigrane texte",
    icon: Stamp,
    href: "/watermark-pdf",
  },
  {
    title: "Signer PDF",
    description: "Ajoutez une signature",
    icon: FileSignature,
    href: "/sign-pdf",
  },
  {
    title: "Modifier PDF",
    description: "Modifiez le contenu du PDF",
    icon: Type,
    href: "/edit-pdf",
  },
  {
    title: "OCR PDF",
    description: "Extrayez le texte des documents numérisés",
    icon: ScanLine,
    href: "/ocr-pdf",
  },
  {
    title: "Réparer PDF",
    description: "Réparez certains PDF endommagés",
    icon: Wrench,
    href: "/repair-pdf",
  },
  {
    title: "Modifier les métadonnées",
    description: "Modifiez les propriétés du PDF",
    icon: FileText,
    href: "/edit-metadata",
  },
];

export const features = [
  {
    icon: Zap,
    title: "Ultra rapide",
    description: "Traitez vos fichiers rapidement grâce à un moteur optimisé",
  },
  {
    icon: Shield,
    title: "100 % sécurisé",
    description: "Les fichiers sont traités localement dans votre navigateur",
  },
  {
    icon: Globe,
    title: "Partout, sur tous vos appareils",
    description: "Accessible depuis vos appareils et navigateurs modernes",
  },
];

export const stats = [
  { value: "Sécurisé", label: "Traitement local" },
  { value: "Rapide", label: "Moteur optimisé" },
  { value: "0", label: "Données stockées" },
  { value: "Gratuit", label: "Accès gratuit" },
];

export const aboutSocials = [
  {
    name: "HEXAOS",
    href: "https://hexaos.fr",
    label: "hexaos.fr",
    color: "hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300",
  },
];

export const aboutSkills = [
  { label: "Traitement local", detail: "Dans votre navigateur" },
  { label: "Rapide", detail: "Moteur optimisé" },
  { label: "Confidentialité", detail: "Vos fichiers restent locaux" },
  { label: "Suite complète", detail: "Outils PDF intégrés" },
];

export const contactMethods = [
  {
    name: "HEXAOS",
    description: "Site officiel",
    value: "hexaos.fr",
    href: "https://hexaos.fr",
    color: "hover:bg-gray-100 hover:border-gray-300",
  },
];

export const contactFaqs = [
  {
    q: "Quel est le délai de réponse ?",
    a: "Pour toute demande, nous vous invitons à utiliser le site HEXAOS ou les canaux de contact disponibles.",
  },
  {
    q: "Puis-je proposer de nouvelles fonctionnalités ?",
    a: "Oui. Les suggestions de fonctionnalités sont les bienvenues via les canaux de contact du projet.",
  },
  {
    q: "HEXAOS PDF est-il open source ?",
    a: "Le fonctionnement repose sur des bibliothèques open source. Pour accéder au code source ou contribuer au projet, consultez le dépôt du projet.",
  },
];

export const faqCategories = [
  {
    title: "Questions générales",
    icon: HelpCircle,
    faqs: [
      {
        question: "Qu’est-ce que HEXAOS PDF ?",
        answer:
          "HEXAOS PDF est un outil gratuit qui vous permet de travailler avec vos fichiers PDF directement dans votre navigateur. Fusionnez, divisez, compressez, convertissez, faites pivoter et modifiez vos PDF sans les envoyer vers un serveur. Le traitement s’effectue localement sur votre appareil pour préserver votre confidentialité et offrir une expérience rapide.",
      },
      {
        question: "HEXAOS PDF est-il vraiment gratuit ?",
        answer:
          "Oui, HEXAOS PDF est gratuit, sans frais cachés. Les fonctionnalités sont accessibles sans abonnement obligatoire. Le service peut être financé par une publicité non intrusive. Aucun filigrane n’est ajouté à vos documents.",
      },
      {
        question: "Dois-je créer un compte ?",
        answer:
          "Aucun compte n’est nécessaire pour utiliser nos outils PDF. Vous pouvez vous connecter avec Google si vous souhaitez conserver un historique de vos actions, mais cela reste facultatif. Les fonctionnalités principales sont disponibles sans connexion.",
      },
      {
        question: "Quelles sont les limites de taille des fichiers ?",
        answer:
          "Comme le traitement s’effectue dans votre navigateur, les limites dépendent principalement de la mémoire disponible sur votre appareil. La plupart des appareils modernes peuvent traiter des fichiers importants, mais les performances peuvent varier pour les très gros documents.",
      },
      {
        question: "Quels navigateurs sont pris en charge ?",
        answer:
          "HEXAOS PDF fonctionne avec les navigateurs modernes comme Chrome, Firefox, Safari, Edge et Opera. Pour une expérience optimale, utilisez une version récente de votre navigateur. Les navigateurs mobiles sont également pris en charge.",
      },
    ],
  },
  {
    title: "Confidentialité et sécurité",
    icon: Shield,
    faqs: [
      {
        question: "Mes fichiers sont-ils envoyés sur vos serveurs ?",
        answer:
          "Non. Vos fichiers ne sont pas envoyés sur nos serveurs pour le traitement PDF. Les opérations sont exécutées directement dans votre navigateur. Vos documents restent ainsi sur votre appareil pendant leur traitement.",
      },
      {
        question: "HEXAOS PDF peut-il être utilisé avec des documents sensibles ?",
        answer:
          "Le traitement local permet d’utiliser HEXAOS PDF pour des documents confidentiels sans transmettre leur contenu à un serveur de traitement. Les contrats, documents financiers et informations personnelles restent sur votre appareil pendant l’opération.",
      },
      {
        question: "Que deviennent mes fichiers après le traitement ?",
        answer:
          "Les fichiers sont conservés temporairement dans la mémoire du navigateur pendant l’utilisation de l’outil. Lorsque vous fermez l’onglet ou quittez la page, les données de travail sont libérées. HEXAOS PDF ne nécessite pas de stockage distant de vos documents pour effectuer ces opérations.",
      },
      {
        question: "Utilisez-vous des cookies ?",
        answer:
          "Nous utilisons un nombre limité de cookies nécessaires au fonctionnement du site et, lorsque cela est activé, à la mesure d’audience et à la publicité. Vous pouvez gérer vos préférences via le mécanisme de consentement aux cookies disponible sur le site.",
      },
    ],
  },
  {
    title: "Outils PDF",
    icon: FileText,
    faqs: [
      {
        question: "Comment fusionner plusieurs PDF ?",
        answer:
          "Go to the Fusionner PDF tool, drag and drop your PDF files or click to browse and select them. You can reorder files by dragging them into your preferred order. You can also expand each file to see pages, rotate or remove specific pages. When ready, click 'Merge & Download' to combine them into a single PDF.",
      },
      {
        question: "Comment diviser un PDF en plusieurs fichiers ?",
        answer:
          "Use the Diviser PDF tool. Upload your PDF, then choose how to split: by specific page ranges (e.g., '1-5, 8-10'), extract all pages as separate files, or select specific pages visually. Click 'Diviser PDF' to process and download your split files.",
      },
      {
        question: "Comment fonctionne la compression PDF ?",
        answer:
          "Our compression tool optimizes your PDF by removing redundant data, optimizing images, and streamlining the file structure. The compression maintains document quality while reducing file size, typically achieving 30-70% size reduction depending on the original file's content.",
      },
      {
        question: "Puis-je convertir un PDF numérisé en texte exploitable ?",
        answer:
          "Yes! Our OCR (Optical Character Recognition) tool can extract text from scanned documents and image-based PDFs. Upload your scanned PDF, and our tool will process it to extract readable, searchable text. The accuracy depends on the scan quality.",
      },
      {
        question: "Comment ajouter un mot de passe à mon PDF ?",
        answer:
          "Use the Protéger PDF tool. Upload your PDF, enter your desired password, and optionally set permissions (like preventing printing or copying). The tool will encrypt your PDF with industry-standard AES encryption.",
      },
      {
        question: "Quels formats d’image puis-je convertir en PDF ?",
        answer:
          "Our JPG to PDF tool supports JPG, JPEG, PNG, and other common image formats. You can upload multiple images and combine them into a single PDF, or convert each image to its own PDF file.",
      },
    ],
  },
  {
    title: "Dépannage",
    icon: Zap,
    faqs: [
      {
        question: "Pourquoi le traitement est-il long ?",
        answer:
          "Processing time depends on your file size and your device's capabilities. Large PDFs with many pages or high-resolution images take longer. If processing seems stuck, try refreshing the page and using a smaller file, or try on a device with more RAM.",
      },
      {
        question: "Pourquoi ne puis-je pas importer mon PDF ?",
        answer:
          "Make sure your file has a .pdf extension and is a valid PDF document. Some PDFs may be corrupted or use unsupported features. If the file opens in other PDF readers, try saving it as a new PDF and uploading the new copy.",
      },
      {
        question: "Le PDF obtenu est différent de l’original",
        answer:
          "PDF processing can sometimes affect formatting, especially for complex documents with special fonts or interactive elements. For best results, use source PDFs that are print-ready. If you're having issues, try using a different tool or contact us.",
      },
      {
        question: "Mon PDF protégé ne se déverrouille pas",
        answer:
          "Our unlock tool can only remove restrictions (like no-printing) from PDFs. If the PDF requires a password to open (fully encrypted), you'll need to enter the correct password. We cannot bypass password protection without the password.",
      },
      {
        question: "Le téléchargement n’a pas démarré",
        answer:
          "Check if your browser is blocking downloads or pop-ups. Try using a different browser. If the issue persists, make sure you have enough disk space and try right-clicking the download button and selecting 'Save As'.",
      },
    ],
  },
];
