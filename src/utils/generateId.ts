import uuid from './uuid';

const generateId = (actualId?: string, prefix: string = ''): string => {
  if (!actualId) {
    const postfix = uuid();
    return [prefix, postfix].join('-');
  }
  return actualId;
};

export default generateId;
