import {
  flowRendererV2,
  flowStyles
} from "./chunk-V2CD6WDT.js";
import {
  flowDb,
  parser$1
} from "./chunk-V4KS5EYD.js";
import "./chunk-TIHX6LL4.js";
import "./chunk-E45J5D3G.js";
import "./chunk-ZK5PBWJP.js";
import "./chunk-7KUBDWA3.js";
import "./chunk-PBW3CMSM.js";
import "./chunk-6PCFK433.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-CJOGYPL6.js";
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
//# sourceMappingURL=flowDiagram-v2-fe64f300-HEREZIGC.js.map
