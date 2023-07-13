import {
  flowRendererV2,
  flowStyles
} from "./chunk-AZOZNDNJ.js";
import {
  flowDb,
  parser$1
} from "./chunk-HPDG7OAM.js";
import "./chunk-RESAFXB6.js";
import "./chunk-65HD42M5.js";
import "./chunk-SR3OFQF2.js";
import "./chunk-3SSFS7DU.js";
import "./chunk-BQ2TVWZS.js";
import "./chunk-UISU623Q.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-GYNT6DJR.js";
import {
  __toESM
} from "./chunk-AUZ3RYOM.js";

// node_modules/mermaid/dist/flowDiagram-v2-fe64f300.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-fe64f300-KUONMTF5.js.map
