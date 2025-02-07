import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

// add items to storage
export const addItems = async (key: string, value: any) => {
  try {
    await RNSecureStorage.setItem(key, value, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
    });
  } catch (e) {
    console.log(`Error ${e}`);
  }
};
