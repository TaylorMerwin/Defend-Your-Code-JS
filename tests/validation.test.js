/**
 * SECURE YOUR CODE JS
 * TCSS 483
 * Taylor Merwin
 * Winter 24 
*/
import { validateName, validateInt, validateInputFileName, validateOutputFileName, validatePassword } from '../js/modules/validation.js';


QUnit.module('validateName tests', function () {
  QUnit.test('Valid names', function (assert) {
    assert.ok(validateName('Bilbo'));
    assert.ok(validateName('Baggins'));
    assert.ok(validateName('baggins'));
    assert.ok(validateName('bilbo'));
    assert.ok(validateName('billybobbilbobaggins'));
    assert.ok(validateName('BILLYBOBBILBOBAGGINS'));
  })
  QUnit.test('Invalid names', function (assert) {
    assert.notOk(validateName(''), 'Empty Names not allowed');
    assert.notOk(validateName("Robert'); DROP TABLE Students;--"), 'No SQL injection allowed');
    assert.notOk(validateName('Bilb0'));
    assert.notOk(validateName('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
  })
});

QUnit.module('validateInt tests', function () {
  QUnit.test('Valid numbers', function (assert) {
    assert.ok(validateInt("1"));
    assert.ok(validateInt(2147483647));
    assert.ok(validateInt("2147483647"));
    assert.ok(validateInt("-2147483648"));
    assert.ok(validateInt(-2147483648));
    assert.ok(validateInt("0"));
    assert.ok(validateInt("-2000"));
    assert.ok(validateInt(0));
    assert.ok(validateInt(-2000));
    assert.ok(validateInt(2000));
  })
  QUnit.test('Invalid numbers', function (assert) {
    assert.notOk(validateInt("-2,147,483,648"));
    assert.notOk(validateInt(1.1));
    assert.notOk(validateInt("2147483648"));
    assert.notOk(validateInt("-2, 147, 483, 648"));
    assert.notOk(validateInt("-2,147,483,648"));
    assert.notOk(validateInt(1.1));
    assert.notOk(validateInt("Not a number"), 'Not a number');
  })
});

QUnit.module('validateInput and validateOutput tests', function () {
  QUnit.test('Valid Input file names', function (assert) {
    assert.ok(validateInputFileName("sample.txt"));
    assert.ok(validateInputFileName("validName.txt"));
    assert.ok(validateInputFileName("another.txt"));
  })
  QUnit.test('Valid Output file names', function (assert) {
    assert.ok(validateOutputFileName("sample.json"));
    assert.ok(validateOutputFileName("valid.json"));
    assert.ok(validateOutputFileName("aPrettyLongOutputFileName.json"));
  })
  QUnit.test('Invalid Input file names', function (assert) {
    assert.notOk(validateInputFileName("sample.json"), 'Wrong file type');
    assert.notOk(validateInputFileName("invalid.exe"), 'Invalid file type');
    assert.notOk(validateInputFileName("file"), 'No file type specified');
    assert.notOk(validateInputFileName("tooLongOfAFileNameIsNotGoodToSee.txt"), 'File name too long');
  })
  QUnit.test('Invalid Output file names', function (assert) {
    assert.notOk(validateOutputFileName("sample.txt"), 'Wrong file type');
    assert.notOk(validateOutputFileName("invalid.exe"), 'Invalid file type');
    assert.notOk(validateOutputFileName("file"), 'No file type specified');
    assert.notOk(validateOutputFileName("tooLongOfAFileNameIsNotGoodToSee.json"), 'File name too long');
  })
});

QUnit.module('validatePassword tests', function () {
  QUnit.test('Valid passwords', function (assert) {
    assert.ok(validatePassword("passW0rd!"), 'Simple valid password');
    assert.ok(validatePassword("abcABC123!@#$%^&*(),.?\":{}|<>"), 'Valid password');
    assert.ok(validatePassword("passW0rd!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"), 'Longer valid password');
  })
  QUnit.test('Invalid passwords', function (assert) {
    assert.notOk(validatePassword("password"), 'No uppercase or letters');
    assert.notOk(validatePassword("abc"), 'Too Short');
    assert.notOk(validatePassword("12345"), 'Just numbers');
    assert.notOk(validatePassword("@!#$%^&"), 'Just symbols');
    assert.notOk(validatePassword(), "Empty password");
  })
});


