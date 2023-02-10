import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered focuced';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        focuced: true
      },
      ['class1', 'class2']
    )).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        focuced: false
      },
      ['class1', 'class2']
    )).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      {
        hovered: true,
        focuced: ''
      },
      ['class1', 'class2']
    )).toBe(expected);
  });
});
