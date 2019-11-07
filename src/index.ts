export { Uppload } from "./uppload";

// Base classes
export { UpploadService } from "./service";
export { UpploadUploader } from "./uploader";

// Helpers
export { getElements } from "./helpers/elements";
export { HandlersParams } from "./helpers/interfaces";

// Language packs
export { en } from "./i18n";

// Uploaders
import Camera from "./services/camera";
import Instagram from "./services/instagram";
import Facebook from "./services/facebook";
import Local from "./services/local";
import URL from "./services/url";
export { Camera, Instagram, Facebook, Local, URL };
