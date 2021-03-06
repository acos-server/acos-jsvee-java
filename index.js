var JSVEEJava = function() {};

JSVEEJava.addToHead = function(params) {
  return '<script src="/static/jsvee-java/JSVEE-java-min.js" type="text/javascript"></script>\n' +
    '<script src="/static/jsvee-java/JSVEE-content-min.js" type="text/javascript"></script>\n' +
    '<link href="/static/jsvee-java/jsvee-java.css" rel="stylesheet">\n';
};

JSVEEJava.addToBody = function(params) {
  return '';
};

JSVEEJava.initialize = function(req, params, handlers, cb) {

  // Initialize the content package
  params.headContent += JSVEEJava.addToHead(params);
  params.bodyContent += JSVEEJava.addToBody(params);

  cb();

};

JSVEEJava.register = function(handlers) {
  handlers.contentPackages['jsvee-java'] = JSVEEJava;
  handlers.contentTypes.jsvee.installedContentPackages.push(JSVEEJava);
};

JSVEEJava.namespace = 'jsvee-java';
JSVEEJava.contentTypeNamespace = 'jsvee';
JSVEEJava.packageType = 'content';

JSVEEJava.meta = {
  'name': 'jsvee-java',
  'shortDescription': 'JSVEE content package containing Java examples.',
  'description': 'JSVEE content package containing Java examples.',
  'author': 'Teemu Sirkiä',
  'license': 'MIT',
  'version': '0.1.1',
  'url': '',
  'teaserContent': ['ae_BJ4_ch01_s05_HelloPrinter', 'ae_conditional_demo1'],
  'contents': {
    'ae_demo': {
      'description': '',
      'order': 0,
      'title': 'ae_demo'
    },
    'ae_BJ4_ch01_s05_HelloPrinter': {
      'description': 'A simple Hello World example.',
      'order': 1,
      'title': 'ae_BJ4_ch01_s05_HelloPrinter',
      'keywords': ['print']
    },
    'ae_BJ4_ch01_s05_PrintTester': {
      'description': 'Examples of printing various statements.',
      'order': 2,
      'title': 'ae_BJ4_ch01_s05_PrintTester',
      'keywords': ['print']
    },
    'ae_BJ4_ch02_s03_VariableDemo': {
      'description': 'An example of variables and assignment.',
      'order': 3,
      'title': 'ae_BJ4_ch02_s03_VariableDemo',
      'keywords': ['variable', 'assign']
    },
    'ae_BJ4_ch02_s05_MethodDemo': {
      'description': 'An example of using string methods length and replace.',
      'order': 4,
      'title': 'ae_BJ4_ch02_s05_MethodDemo',
      'keywords': ['string', 'method']
    },
    'ae_BJ4_ch02_s06_ConstructorDemo': {
      'description': 'An example of creating a new object that has instance variables.',
      'order': 5,
      'title': 'ae_BJ4_ch02_s06_ConstructorDemo',
      'keywords': ['constructor', 'instance']
    },
    'ae_BJ4_ch02_s07_AccessorMutatorDemo': {
      'description': 'An example of creating an object with getter methods.',
      'order': 6,
      'title': 'ae_BJ4_ch02_s07_AccessorMutatorDemo',
      'keywords': ['instance', 'getter', 'accessor']
    },
    'ae_BJ4_ch02_s09_MoveTester': {
      'description': 'An example of creating an object with mutable state.',
      'order': 7,
      'title': 'ae_BJ4_ch02_s09_MoveTester',
      'keywords': ['instance']
    },
    'ae_BJ4_ch02_s10_CopyDemo': {
      'description': 'An example of changing references and basic type values.',
      'order': 8,
      'title': 'ae_BJ4_ch02_s10_CopyDemo',
      'keywords': ['instance', 'reference']
    },
    'ae_BJ4_ch03_s01_CounterDemo': {
      'description': 'An example of creating a class with mutable state.',
      'order': 9,
      'title': 'ae_BJ4_ch03_s01_CounterDemo',
      'keywords': ['class', 'instance', 'method']
    },
    'ae_BJ4_ch03_s06_BankAccountTester': {
      'description': 'An example of creating a class with mutable state.',
      'order': 10,
      'title': 'ae_BJ4_ch03_s06_BankAccountTester',
      'keywords': ['class', 'instance', 'method']
    },
    'ae_BJ4_ch03_s06_CashRegisterTester': {
      'description': 'An example of creating a class with mutable state.',
      'order': 11,
      'title': 'ae_BJ4_ch03_s06_CashRegisterTester',
      'keywords': ['class', 'instance', 'method']
    },
    'ae_JavaTutorial_4_1_3': {
      'description': 'An example of int and long types.',
      'order': 12,
      'title': 'ae_JavaTutorial_4_1_3',
      'keywords': ['int', 'long']
    },
    'ae_arithmetic_v2': {
      'description': 'An example of basic arithmetic operations',
      'order': 13,
      'title': 'ae_arithmetic_v2',
      'keywords': ['arithmetic']
    },
    'ae_StringExample_v2': {
      'description': 'An example of concatenating strings.',
      'order': 14,
      'title': 'ae_StringExample_v2',
      'keywords': ['string', 'concatenation']
    },
    'ae_JavaTutorial_4_2_7': {
      'description': 'An example of nesting if statements.',
      'order': 15,
      'title': 'ae_JavaTutorial_4_2_7',
      'keywords': ['if', 'nesting']
    },
    'ae_decisions1_v2': {
      'description': 'An example of if - else if - else statement.',
      'order': 16,
      'title': 'ae_decisions1_v2',
      'keywords': ['if', 'else']
    },
    'ae_relational_operators_v2': {
      'description': 'An example of producing boolean values.',
      'order': 17,
      'title': 'ae_relational_operators_v2',
      'keywords': ['boolean', 'operator']
    },
    'ae_comparison_operators_v2': {
      'description': 'An example of using comparison operators with if statement.',
      'order': 18,
      'title': 'ae_comparison_operators_v2',
      'keywords': ['comparison', 'if', 'operator']
    },
    'ae_while_v2': {
      'description': 'An example of using while statement.',
      'order': 19,
      'title': 'ae_while_v2',
      'keywords': ['while']
    },
    'ae_do_while_v2': {
      'description': 'An example of using do - while statement.',
      'order': 20,
      'title': 'ae_do_while_v2',
      'keywords': ['do', 'while']
    },
    'ae_JavaTutorial_4_6_6': {
      'description': 'An example of using a for loop with two variables.',
      'order': 21,
      'title': 'ae_JavaTutorial_4_6_6',
      'keywords': ['for']
    },
    'ae_nested_loops_v2': {
      'description': 'An example of nesting for loops.',
      'order': 22,
      'title': 'ae_nested_loops_v2',
      'keywords': ['for', 'nesting']
    },
    'ae_use_array_v2': {
      'description': 'An example of using an array with a for loop.',
      'order': 23,
      'title': 'ae_use_array_v2',
      'keywords': ['array', 'for', 'iteration']
    },
    'ae_JavaTutorial_4_7_5': {
      'description': 'An example of iterating an array with for each loop.',
      'order': 24,
      'title': 'ae_JavaTutorial_4_7_5',
      'keywords': ['array', 'for', 'iteration']
    },
    'ae_JavaTutorial_4_7_8': {
      'description': 'An example of iterating an array with for loop and breaking the loop.',
      'order': 25,
      'title': 'ae_JavaTutorial_4_7_8',
      'keywords': ['array', 'for', 'break', 'iteration']
    },
    'ae_EnhancedForLoopDemo': {
      'description': 'An example of iterating an array with indices and with for each loop.',
      'order': 26,
      'title': 'ae_EnhancedForLoopDemo',
      'keywords': ['for', 'iteration']
    },
    'ae_use_2darray_v2': {
      'description': 'An example of nested arrays.',
      'order': 27,
      'title': 'ae_use_2darray_v2',
      'keywords': ['array', 'nesting']
    },
    'ae_arraylist2_v2': {
      'description': 'An example of using array lists.',
      'order': 28,
      'title': 'ae_arraylist2_v2',
      'keywords': ['array list']
    },
    'ae_JavaTutorial_4_7_4': {
      'description': 'An example of using array lists and for each loop.',
      'order': 29,
      'title': 'ae_JavaTutorial_4_7_4',
      'keywords': ['array list', 'iteration', 'for']
    },
    'ae_simple_inheritance_1': {
      'description': 'An example of inheritance.',
      'order': 30,
      'title': 'ae_simple_inheritance_1',
      'keywords': ['class', 'inheritance']
    },
    'ae_inheritance_polymorphism_1': {
      'description': 'An example of inheritance.',
      'order': 31,
      'title': 'ae_inheritance_polymorphism_1',
      'keywords': ['class', 'inheritance']
    },
    'ae_jeg_interface1_v2': {
      'description': 'An example of using inheritance.',
      'order': 32,
      'title': 'ae_jeg_interface1_v2',
      'keywords': ['class', 'inheritance']
    },
    'ae_Measure': {
      'description': 'An example of creating a collection to hold instances.',
      'order': 33,
      'title': 'ae_Measure',
      'keywords': ['class', 'instance']
    },
    'ae_wrapper_class_v2': {
      'description': 'An example of automatic unboxing of integers.',
      'order': 34,
      'title': 'ae_wrapper_class_v2',
      'keywords': ['unboxing', 'int', 'integer']
    },
    'ae_exception_v2': {
      'description': 'An example of catching exceptions.',
      'order': 35,
      'title': 'ae_exception_v2',
      'keywords': ['try', 'catch', 'finally', 'exception']
    },
    'ae_inheritance_polymorphism_2': {
      'description': 'An example of inheritance.',
      'order': 36,
      'title': 'ae_inheritance_polymorphism_2',
      'keywords': ['class', 'inheritance']
    },
    'ae_constant_math_demo': {
      'description': 'An example of using constant values.',
      'order': 37,
      'title': 'ae_constant_math_demo',
      'keywords': ['constant']
    },
    'ae_constant_demo': {
      'description': 'An example of using constant values.',
      'order': 38,
      'title': 'ae_constant_demo',
      'keywords': ['constant']
    },
    'ae_cash_register_constant_demo': {
      'description': 'An example of using constant values.',
      'order': 39,
      'title': 'ae_cash_register_constant_demo',
      'keywords': ['constant']
    },
    'ae_primitive_datatype_demo': {
      'description': 'An example of using int, double and short values.',
      'order': 40,
      'title': 'ae_primitive_datatype_demo',
      'keywords': ['int', 'short', 'double']
    },
    'ae_do_while_demo': {
      'description': 'An example of using do - while statement.',
      'order': 41,
      'title': 'ae_do_while_demo',
      'keywords': ['do', 'while']
    },
    'ae_nested_for_demo': {
      'description': 'An example of using nested for loops.',
      'order': 42,
      'title': 'ae_nested_for_demo',
      'keywords': ['for', 'nesting']
    },
    'ae_while_demo': {
      'description': 'An example of using a while loop.',
      'order': 43,
      'title': 'ae_while_demo',
      'keywords': ['while']
    },
    'ae_concat_demo': {
      'description': 'An example of concatenating strings.',
      'order': 44,
      'title': 'ae_concat_demo',
      'keywords': ['string', 'concatenation']
    },
    'ae_conditional_demo1': {
      'description': 'An example of using boolean operators.',
      'order': 45,
      'title': 'ae_conditional_demo1',
      'keywords': ['boolean', 'operator']
    },
    'ae_switch_demo1': {
      'description': 'An example of using switch statement.',
      'order': 46,
      'title': 'ae_switch_demo1',
      'keywords': ['switch', 'case']
    },
    'ae_switch_demo2': {
      'description': 'An example of using switch statement.',
      'order': 47,
      'title': 'ae_switch_demo2',
      'keywords': ['switch', 'case']
    },
    'ae_unary_demo': {
      'description': 'An example of using unary operators.',
      'order': 48,
      'title': 'ae_unary_demo',
      'keywords': ['unary', 'operator']
    },
    'ae_tostring_demo': {
      'description': 'An example of auto-conversion to strings.',
      'order': 49,
      'title': 'ae_tostring_demo',
      'keywords': ['string', 'tostring']
    },
    'ae_for_demo': {
      'description': 'An example of for loop.',
      'order': 50,
      'title': 'ae_for_demo',
      'keywords': ['for']
    },
    'ae_multidimarray_demo': {
      'description': 'An example of nesting arrays.',
      'order': 51,
      'title': 'ae_multidimarray_demo',
      'keywords': ['array', 'nesting']
    },
    'ae_array_demo': {
      'description': 'An example of creating and mutating an array.',
      'order': 52,
      'title': 'ae_array_demo',
      'keywords': ['array']
    }
  }
};

module.exports = JSVEEJava;
