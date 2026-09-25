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
          "Ouvrez l’outil Fusionner PDF, glissez-déposez vos fichiers ou sélectionnez-les depuis votre appareil. Réorganisez-les dans l’ordre souhaité. Vous pouvez également afficher les pages, les faire pivoter ou en supprimer certaines. Lorsque tout est prêt, cliquez sur « Fusionner et télécharger » pour créer un seul PDF.",
      },
      {
        question: "Comment diviser un PDF en plusieurs fichiers ?",
        answer:
          "Utilisez l’outil Diviser PDF. Importez votre PDF, puis choisissez le mode de division : plages de pages précises (par exemple « 1-5, 8-10 »), toutes les pages dans des fichiers séparés ou sélection visuelle de pages. Cliquez sur « Diviser PDF » pour lancer le traitement et télécharger les fichiers.",
      },
      {
        question: "Comment fonctionne la compression PDF ?",
        answer:
          "L’outil de compression optimise votre PDF en réduisant les données redondantes et en optimisant les images et la structure du document. Le niveau de réduction dépend du contenu et de la structure du fichier d’origine ; le résultat peut donc varier.",
      },
      {
        question: "Puis-je convertir un PDF numérisé en texte exploitable ?",
        answer:
          "Oui. L’outil OCR (reconnaissance optique de caractères) peut extraire du texte depuis des documents numérisés et des PDF constitués d’images. Importez votre document ; le texte extrait dépend notamment de la qualité du scan.",
      },
      {
        question: "Comment ajouter un mot de passe à mon PDF ?",
        answer:
          "Utilisez l’outil Protéger PDF. Importez votre document, saisissez le mot de passe souhaité et, si disponible, configurez les autorisations comme l’impression ou la copie. Le niveau de protection dépend des options prises en charge par le PDF.",
      },
      {
        question: "Quels formats d’image puis-je convertir en PDF ?",
        answer:
          "L’outil JPG vers PDF prend en charge les formats d’image courants comme JPG, JPEG et PNG. Vous pouvez importer plusieurs images pour les réunir dans un seul PDF, ou convertir chaque image séparément.",
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
          "La durée du traitement dépend de la taille du fichier et des capacités de votre appareil. Les PDF volumineux ou contenant des images haute résolution peuvent demander davantage de temps. Si le traitement semble bloqué, rechargez la page et essayez avec un fichier plus léger.",
      },
      {
        question: "Pourquoi ne puis-je pas importer mon PDF ?",
        answer:
          "Vérifiez que votre fichier possède l’extension .pdf et qu’il s’agit bien d’un document PDF valide. Certains fichiers peuvent être endommagés ou utiliser des fonctionnalités non prises en charge. S’il s’ouvre dans un autre lecteur PDF, essayez de l’enregistrer à nouveau puis d’importer la nouvelle copie.",
      },
      {
        question: "Le PDF obtenu est différent de l’original",
        answer:
          "Certaines opérations peuvent modifier la mise en page, notamment avec des documents complexes, des polices particulières ou des éléments interactifs. Pour de meilleurs résultats, utilisez un PDF correctement finalisé. Si le problème persiste, essayez un autre outil.",
      },
      {
        question: "Mon PDF protégé ne se déverrouille pas",
        answer:
          "L’outil de déverrouillage peut supprimer certaines restrictions d’utilisation d’un PDF. Si le document exige un mot de passe pour être ouvert et qu’il est chiffré, vous devez fournir le mot de passe correct. La protection par mot de passe ne peut pas être contournée sans celui-ci.",
      },
      {
        question: "Le téléchargement n’a pas démarré",
        answer:
          "Vérifiez que votre navigateur n’empêche pas les téléchargements ou les fenêtres nécessaires. Essayez également un autre navigateur. Si le problème persiste, vérifiez l’espace disque disponible et relancez le téléchargement.",
      },
    ],
  },
];
