import { SlsDbItem } from '../types';

export const dbItemToItem = (dbItems: SlsDbItem[]): any[] => {
  return dbItems.map((item) => {
    return {
      key: item.key,
      modified: item.modified,
      created: item.created,
      ...item.value,
    };
  });
};
