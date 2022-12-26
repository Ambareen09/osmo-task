import * as _198 from "./abci/types";
import * as _199 from "./crypto/keys";
import * as _200 from "./crypto/proof";
import * as _201 from "./libs/bits/types";
import * as _202 from "./p2p/types";
import * as _203 from "./types/block";
import * as _204 from "./types/evidence";
import * as _205 from "./types/params";
import * as _206 from "./types/types";
import * as _207 from "./types/validator";
import * as _208 from "./version/types";
export namespace tendermint {
  export const abci = { ..._198
  };
  export const crypto = { ..._199,
    ..._200
  };
  export namespace libs {
    export const bits = { ..._201
    };
  }
  export const p2p = { ..._202
  };
  export const types = { ..._203,
    ..._204,
    ..._205,
    ..._206,
    ..._207
  };
  export const version = { ..._208
  };
}