import * as _134 from "./downtime-detector/v1beta1/downtime_duration";
import * as _135 from "./downtime-detector/v1beta1/genesis";
import * as _136 from "./downtime-detector/v1beta1/query";
import * as _137 from "./epochs/genesis";
import * as _138 from "./epochs/query";
import * as _139 from "./gamm/pool-models/balancer/balancerPool";
import * as _140 from "./gamm/v1beta1/genesis";
import * as _141 from "./gamm/v1beta1/query";
import * as _142 from "./gamm/v1beta1/tx";
import * as _143 from "./gamm/pool-models/balancer/tx/tx";
import * as _144 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _145 from "./gamm/pool-models/stableswap/tx";
import * as _146 from "./gamm/v2/query";
import * as _147 from "./ibc-rate-limit/v1beta1/params";
import * as _148 from "./ibc-rate-limit/v1beta1/query";
import * as _149 from "./incentives/gauge";
import * as _150 from "./incentives/genesis";
import * as _151 from "./incentives/params";
import * as _152 from "./incentives/query";
import * as _153 from "./incentives/tx";
import * as _154 from "./lockup/genesis";
import * as _155 from "./lockup/lock";
import * as _156 from "./lockup/params";
import * as _157 from "./lockup/query";
import * as _158 from "./lockup/tx";
import * as _159 from "./mint/v1beta1/genesis";
import * as _160 from "./mint/v1beta1/mint";
import * as _161 from "./mint/v1beta1/query";
import * as _162 from "./pool-incentives/v1beta1/genesis";
import * as _163 from "./pool-incentives/v1beta1/gov";
import * as _164 from "./pool-incentives/v1beta1/incentives";
import * as _165 from "./pool-incentives/v1beta1/query";
import * as _166 from "./protorev/v1beta1/genesis";
import * as _167 from "./protorev/v1beta1/gov";
import * as _168 from "./protorev/v1beta1/params";
import * as _169 from "./protorev/v1beta1/protorev";
import * as _170 from "./protorev/v1beta1/query";
import * as _171 from "./protorev/v1beta1/tx";
import * as _172 from "./sumtree/v1beta1/tree";
import * as _173 from "./superfluid/genesis";
import * as _174 from "./superfluid/params";
import * as _175 from "./superfluid/query";
import * as _176 from "./superfluid/superfluid";
import * as _177 from "./superfluid/tx";
import * as _178 from "./swaprouter/v1beta1/genesis";
import * as _179 from "./swaprouter/v1beta1/module_route";
import * as _180 from "./swaprouter/v1beta1/query";
import * as _181 from "./swaprouter/v1beta1/swap_route";
import * as _182 from "./swaprouter/v1beta1/tx";
import * as _183 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _184 from "./tokenfactory/v1beta1/genesis";
import * as _185 from "./tokenfactory/v1beta1/params";
import * as _186 from "./tokenfactory/v1beta1/query";
import * as _187 from "./tokenfactory/v1beta1/tx";
import * as _188 from "./twap/v1beta1/genesis";
import * as _189 from "./twap/v1beta1/query";
import * as _190 from "./twap/v1beta1/twap_record";
import * as _191 from "./txfees/v1beta1/feetoken";
import * as _192 from "./txfees/v1beta1/genesis";
import * as _193 from "./txfees/v1beta1/gov";
import * as _194 from "./txfees/v1beta1/query";
import * as _195 from "./valset-pref/v1beta1/query";
import * as _196 from "./valset-pref/v1beta1/state";
import * as _197 from "./valset-pref/v1beta1/tx";
import * as _290 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _291 from "./gamm/pool-models/stableswap/tx.amino";
import * as _292 from "./gamm/v1beta1/tx.amino";
import * as _293 from "./incentives/tx.amino";
import * as _294 from "./lockup/tx.amino";
import * as _295 from "./protorev/v1beta1/tx.amino";
import * as _296 from "./superfluid/tx.amino";
import * as _297 from "./swaprouter/v1beta1/tx.amino";
import * as _298 from "./tokenfactory/v1beta1/tx.amino";
import * as _299 from "./valset-pref/v1beta1/tx.amino";
import * as _300 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _301 from "./gamm/pool-models/stableswap/tx.registry";
import * as _302 from "./gamm/v1beta1/tx.registry";
import * as _303 from "./incentives/tx.registry";
import * as _304 from "./lockup/tx.registry";
import * as _305 from "./protorev/v1beta1/tx.registry";
import * as _306 from "./superfluid/tx.registry";
import * as _307 from "./swaprouter/v1beta1/tx.registry";
import * as _308 from "./tokenfactory/v1beta1/tx.registry";
import * as _309 from "./valset-pref/v1beta1/tx.registry";
import * as _310 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _311 from "./epochs/query.rpc.Query";
import * as _312 from "./gamm/v1beta1/query.rpc.Query";
import * as _313 from "./gamm/v2/query.rpc.Query";
import * as _314 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _315 from "./incentives/query.rpc.Query";
import * as _316 from "./lockup/query.rpc.Query";
import * as _317 from "./mint/v1beta1/query.rpc.Query";
import * as _318 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _319 from "./protorev/v1beta1/query.rpc.Query";
import * as _320 from "./superfluid/query.rpc.Query";
import * as _321 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _322 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _323 from "./twap/v1beta1/query.rpc.Query";
import * as _324 from "./txfees/v1beta1/query.rpc.Query";
import * as _325 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _326 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _327 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _328 from "./gamm/v1beta1/tx.rpc.msg";
import * as _329 from "./incentives/tx.rpc.msg";
import * as _330 from "./lockup/tx.rpc.msg";
import * as _331 from "./protorev/v1beta1/tx.rpc.msg";
import * as _332 from "./superfluid/tx.rpc.msg";
import * as _333 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _334 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _335 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _342 from "./rpc.query";
import * as _343 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._134,
      ..._135,
      ..._136,
      ..._310
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._137,
      ..._138,
      ..._311
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._292,
      ..._302,
      ..._312,
      ..._328
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._143,
          ..._290,
          ..._300,
          ..._326
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._144,
          ..._145,
          ..._291,
          ..._301,
          ..._327
        };
      }
    }
    export const v2 = { ..._146,
      ..._313
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._147,
      ..._148,
      ..._314
    };
  }
  export const incentives = { ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._293,
    ..._303,
    ..._315,
    ..._329
  };
  export const lockup = { ..._154,
    ..._155,
    ..._156,
    ..._157,
    ..._158,
    ..._294,
    ..._304,
    ..._316,
    ..._330
  };
  export namespace mint {
    export const v1beta1 = { ..._159,
      ..._160,
      ..._161,
      ..._317
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._318
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._166,
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._171,
      ..._295,
      ..._305,
      ..._319,
      ..._331
    };
  }
  export namespace store {
    export const v1beta1 = { ..._172
    };
  }
  export const superfluid = { ..._173,
    ..._174,
    ..._175,
    ..._176,
    ..._177,
    ..._296,
    ..._306,
    ..._320,
    ..._332
  };
  export namespace swaprouter {
    export const v1beta1 = { ..._178,
      ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._297,
      ..._307,
      ..._321,
      ..._333
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._183,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._298,
      ..._308,
      ..._322,
      ..._334
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._188,
      ..._189,
      ..._190,
      ..._323
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._324
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._195,
      ..._196,
      ..._197,
      ..._299,
      ..._309,
      ..._325,
      ..._335
    };
  }
  export const ClientFactory = { ..._342,
    ..._343
  };
}