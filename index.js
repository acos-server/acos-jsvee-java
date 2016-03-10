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
  'description': '',
  'author': 'Teemu Sirkiä',
  'license': 'MIT',
  'version': '0.0.1',
  'url': '',
  'teaserContent': ['ae_BJ4_ch01_s05_HelloPrinter', 'ae_conditional_demo1'],
  'contents': {
    'ae_demo': {
      'description': '',
      'order': 0,
      'title': 'ae_demo'
    },
    'ae_BJ4_ch01_s05_HelloPrinter': {
      'description': '',
      'order': 1,
      'title': 'ae_BJ4_ch01_s05_HelloPrinter'
    },
    'ae_BJ4_ch01_s05_PrintTester': {
      'description': '',
      'order': 2,
      'title': 'ae_BJ4_ch01_s05_PrintTester'
    },
    'ae_BJ4_ch02_s03_VariableDemo': {
      'description': '',
      'order': 3,
      'title': 'ae_BJ4_ch02_s03_VariableDemo'
    },
    'ae_BJ4_ch02_s05_MethodDemo': {
      'description': '',
      'order': 4,
      'title': 'ae_BJ4_ch02_s05_MethodDemo'
    },
    'ae_BJ4_ch02_s06_ConstructorDemo': {
      'description': '',
      'order': 5,
      'title': 'ae_BJ4_ch02_s06_ConstructorDemo'
    },
    'ae_BJ4_ch02_s07_AccessorMutatorDemo': {
      'description': '',
      'order': 6,
      'title': 'ae_BJ4_ch02_s07_AccessorMutatorDemo'
    },
    'ae_BJ4_ch02_s09_MoveTester': {
      'description': '',
      'order': 7,
      'title': 'ae_BJ4_ch02_s09_MoveTester'
    },
    'ae_BJ4_ch02_s10_CopyDemo': {
      'description': '',
      'order': 8,
      'title': 'ae_BJ4_ch02_s10_CopyDemo'
    },
    'ae_BJ4_ch03_s01_CounterDemo': {
      'description': '',
      'order': 9,
      'title': 'ae_BJ4_ch03_s01_CounterDemo'
    },
    'ae_BJ4_ch03_s06_BankAccountTester': {
      'description': '',
      'order': 10,
      'title': 'ae_BJ4_ch03_s06_BankAccountTester'
    },
    'ae_BJ4_ch03_s06_CashRegisterTester': {
      'description': '',
      'order': 11,
      'title': 'ae_BJ4_ch03_s06_CashRegisterTester'
    },
    'ae_JavaTutorial_4_1_3': {
      'description': '',
      'order': 12,
      'title': 'ae_JavaTutorial_4_1_3'
    },
    'ae_arithmetic_v2': {
      'description': '',
      'order': 13,
      'title': 'ae_arithmetic_v2'
    },
    'ae_StringExample_v2': {
      'description': '',
      'order': 14,
      'title': 'ae_StringExample_v2'
    },
    'ae_JavaTutorial_4_2_7': {
      'description': '',
      'order': 15,
      'title': 'ae_JavaTutorial_4_2_7'
    },
    'ae_decisions1_v2': {
      'description': '',
      'order': 16,
      'title': 'ae_decisions1_v2'
    },
    'ae_relational_operators_v2': {
      'description': '',
      'order': 17,
      'title': 'ae_relational_operators_v2'
    },
    'ae_comparison_operators_v2': {
      'description': '',
      'order': 18,
      'title': 'ae_comparison_operators_v2'
    },
    'ae_while_v2': {
      'description': '',
      'order': 19,
      'title': 'ae_while_v2'
    },
    'ae_do_while_v2': {
      'description': '',
      'order': 20,
      'title': 'ae_do_while_v2'
    },
    'ae_JavaTutorial_4_6_6': {
      'description': '',
      'order': 21,
      'title': 'ae_JavaTutorial_4_6_6'
    },
    'ae_nested_loops_v2': {
      'description': '',
      'order': 22,
      'title': 'ae_nested_loops_v2'
    },
    'ae_use_array_v2': {
      'description': '',
      'order': 23,
      'title': 'ae_use_array_v2'
    },
    'ae_JavaTutorial_4_7_5': {
      'description': '',
      'order': 24,
      'title': 'ae_JavaTutorial_4_7_5'
    },
    'ae_JavaTutorial_4_7_8': {
      'description': '',
      'order': 25,
      'title': 'ae_JavaTutorial_4_7_8'
    },
    'ae_EnhancedForLoopDemo': {
      'description': '',
      'order': 26,
      'title': 'ae_EnhancedForLoopDemo'
    },
    'ae_use_2darray_v2': {
      'description': '',
      'order': 27,
      'title': 'ae_use_2darray_v2'
    },
    'ae_arraylist2_v2': {
      'description': '',
      'order': 28,
      'title': 'ae_arraylist2_v2'
    },
    'ae_JavaTutorial_4_7_4': {
      'description': '',
      'order': 29,
      'title': 'ae_JavaTutorial_4_7_4'
    },
    'ae_simple_inheritance_1': {
      'description': '',
      'order': 30,
      'title': 'ae_simple_inheritance_1'
    },
    'ae_inheritance_polymorphism_1': {
      'description': '',
      'order': 31,
      'title': 'ae_inheritance_polymorphism_1'
    },
    'ae_jeg_interface1_v2': {
      'description': '',
      'order': 32,
      'title': 'ae_jeg_interface1_v2'
    },
    'ae_Measure': {
      'description': '',
      'order': 33,
      'title': 'ae_Measure'
    },
    'ae_wrapper_class_v2': {
      'description': '',
      'order': 34,
      'title': 'ae_wrapper_class_v2'
    },
    'ae_exception_v2': {
      'description': '',
      'order': 35,
      'title': 'ae_exception_v2'
    },
    'ae_inheritance_polymorphism_2': {
      'description': '',
      'order': 36,
      'title': 'ae_inheritance_polymorphism_2'
    },
    'ae_constant_math_demo': {
      'description': '',
      'order': 37,
      'title': 'ae_constant_math_demo'
    },
    'ae_constant_demo': {
      'description': '',
      'order': 38,
      'title': 'ae_constant_demo'
    },
    'ae_cash_register_constant_demo': {
      'description': '',
      'order': 39,
      'title': 'ae_cash_register_constant_demo'
    },
    'ae_primitive_datatype_demo': {
      'description': '',
      'order': 40,
      'title': 'ae_primitive_datatype_demo'
    },
    'ae_do_while_demo': {
      'description': '',
      'order': 41,
      'title': 'ae_do_while_demo'
    },
    'ae_nested_for_demo': {
      'description': '',
      'order': 42,
      'title': 'ae_nested_for_demo'
    },
    'ae_while_demo': {
      'description': '',
      'order': 43,
      'title': 'ae_while_demo'
    },
    'ae_concat_demo': {
      'description': '',
      'order': 44,
      'title': 'ae_concat_demo'
    },
    'ae_conditional_demo1': {
      'description': '',
      'order': 45,
      'title': 'ae_conditional_demo1'
    },
    'ae_switch_demo1': {
      'description': '',
      'order': 46,
      'title': 'ae_switch_demo1'
    },
    'ae_switch_demo2': {
      'description': '',
      'order': 47,
      'title': 'ae_switch_demo2'
    },
    'ae_unary_demo': {
      'description': '',
      'order': 48,
      'title': 'ae_unary_demo'
    },
    'ae_tostring_demo': {
      'description': '',
      'order': 49,
      'title': 'ae_tostring_demo'
    },
    'ae_for_demo': {
      'description': '',
      'order': 50,
      'title': 'ae_for_demo'
    },
    'ae_multidimarray_demo': {
      'description': '',
      'order': 51,
      'title': 'ae_multidimarray_demo'
    },
    'ae_array_demo': {
      'description': '',
      'order': 52,
      'title': 'ae_array_demo'
    }
  }
};

module.exports = JSVEEJava;
