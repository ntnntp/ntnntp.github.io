"function validateText(id)\n{\nif($(\"#\"+id).val()==null || $(\"#\"+id).val()==\"\")\n{\nvar div = $(\"#\"+id).closest(\"div\");\ndiv.removeClass(\"has-success\");\n$(\"#glypcn\"+id).remove();\ndiv.addClass(\"has-error has-feedback\");\ndiv.append('<span id=\"glypcn'+id+'\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>');\nreturn false;\n}\nelse{\n    var div = $(\"#\"+id).closest(\"div\");\n    div.removeClass(\"has-error\");\n$(\"#glypcn\"+id).remove();\ndiv.addClass(\"has-success has-feedback\");\ndiv.append('<span id=\"glypcn'+id+'\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>');\n    return true;\n}\n\n}\n\nfunction validateEmail(id)\n{\n  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/i;\nif(!email_regex.test($(\"#\"+id).val()))\n{\nvar div = $(\"#\"+id).closest(\"div\");\ndiv.removeClass(\"has-success\");\n$(\"#glypcn\"+id).remove();\ndiv.addClass(\"has-error has-feedback\");\ndiv.append('<span id=\"glypcn'+id+'\" class=\"glyphicon glyphicon-remove form-control-feedback\"></span>');\nreturn false;\n}\nelse{\n    var div = $(\"#\"+id).closest(\"div\");\n    div.removeClass(\"has-error\");\n$(\"#glypcn\"+id).remove();\ndiv.addClass(\"has-success has-feedback\");\ndiv.append('<span id=\"glypcn'+id+'\" class=\"glyphicon glyphicon-ok form-control-feedback\"></span>');\n    return true;\n}\n\n}\n\n$(document).ready(\nfunction()\n{\n$(\"#contactButton\").click(function()\n{\n if(!validateText(\"contactName\"))\n {\n    return false;\n }\n if(!validateEmail(\"contactEmail\"))\n {\n    return false;\n }\n if(!validateText(\"contactMobile\"))\n {\n    return false;\n }\n if(!validateText(\"contactAddress1\"))\n {\n    return false;\n }\n if(!validateText(\"contactCity\"))\n {\n    return false;\n }\n $(\"form#contactForm\").submit();\n}\n\n    );\n}\n\n\n    );"