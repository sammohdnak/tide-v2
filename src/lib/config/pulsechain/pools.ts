import { Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {
    staBAL: '',
    bbAaveUSD: {
      v1: '',
      v2: '',
      v3: '',
    },
    veBAL: '0x8ae7F93479f90ae6EA123d60c683325006c11A92',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: true,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    'Stable',
    'MetaStable',
    'LiquidityBootstrapping',
    'Investment',
    'StablePhantom',
    'ComposableStable',
  ],
  Stable: {
    AllowList: [],
  },
  Investment: {
    AllowList: [],
  },
  Weighted: {
    // Deprecated list, no longer in use
    AllowList: [],
  },
  Factories: {},
  Stakable: {
    VotingGaugePools: [],
    AllowList: [],
  },
  Metadata: {},
  Deep: [],
  BoostedApr: [],
  DisabledJoins: [],
  Deprecated: {
    deprecatedid: {}, //Used for unit testing
  },
  ExitViaInternalBalance: [],
  Risks: {},
};

export default pools;
