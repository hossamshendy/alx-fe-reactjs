// استيراد مكتبة محاكاة localStorage
import "localstorage-polyfill";

// يمكنك أيضًا إضافة أي إعدادات إضافية هنا، مثل محاكاة طرق أخرى أو إعدادات خاصة بالاختبارات.
// jest.setup.js
globalThis.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
};
