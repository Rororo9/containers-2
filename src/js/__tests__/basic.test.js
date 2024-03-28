import ErrorRepository from '../app.js';

const errorRepository = new ErrorRepository();
  errorRepository.errors.set('404', 'Не найдено');
  errorRepository.errors.set('414', 'Слишком длинный URL-адрес');

test('has code', () => {
  expect(errorRepository.translate('404')).toBe('Не найдено');
});

test('no code', () => {
  expect(errorRepository.translate('414')).toBe('Слишком длинный URL-адрес');
});

test('no code', () => {
  expect(errorRepository.translate('600')).toBe('Неизвестная ошибка');
});
