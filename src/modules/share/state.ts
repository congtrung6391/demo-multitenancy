import { atomFamily } from 'recoil';

export const tenantDataAtomFamily = atomFamily({
  key: 'tenantData',
  default: null,
});
