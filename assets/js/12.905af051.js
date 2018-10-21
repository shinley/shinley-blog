(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{171:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"_13-索引优化-五"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-索引优化-五","aria-hidden":"true"}},[s._v("#")]),s._v(" 13.索引优化(五)")]),s._v(" "),a("h2",{attrs:{id:"mysql在使用不等于（-或-）的时候无法使用索引，会导致全表扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql在使用不等于（-或-）的时候无法使用索引，会导致全表扫描","aria-hidden":"true"}},[s._v("#")]),s._v(" mysql在使用不等于（!=或<>）的时候无法使用索引，会导致全表扫描")]),s._v(" "),a("p",[s._v("先看等于的情况")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("EXPLAIN")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" staffs "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token string"}},[s._v("'july'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+-----------------------+---------+-------+------+----------+-------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" select_type "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("table")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" partitions "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" possible_keys         "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("key")]),s._v("                   "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" key_len "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" ref   "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" filtered "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+-----------------------+---------+-------+------+----------+-------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SIMPLE")]),s._v("      "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" staffs "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" ref  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" idx_staffs_nameAgePos "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" idx_staffs_nameAgePos "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("74")]),s._v("      "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" const "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),a("span",{attrs:{class:"token number"}},[s._v("100.00")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+-----------------------+---------+-------+------+----------+-------+")]),s._v("\n"),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("再看不等于的情况")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("EXPLAIN")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" staffs "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name"),a("span",{attrs:{class:"token operator"}},[s._v("!=")]),a("span",{attrs:{class:"token string"}},[s._v("'july'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" select_type "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("table")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" partitions "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" possible_keys         "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("key")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" key_len "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" ref  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" filtered "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra       "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SIMPLE")]),s._v("      "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" staffs "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" idx_staffs_nameAgePos "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{attrs:{class:"token number"}},[s._v("66.67")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("Using")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\nmysql"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("EXPLAIN")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" staffs "),a("span",{attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" name "),a("span",{attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'july'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" id "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" select_type "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("table")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" partitions "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" possible_keys         "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("key")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" key_len "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" ref  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("rows")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" filtered "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra       "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("  "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("SIMPLE")]),s._v("      "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" staffs "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("       "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("ALL")]),s._v("  "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" idx_staffs_nameAgePos "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("    "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{attrs:{class:"token number"}},[s._v("66.67")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("Using")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{attrs:{class:"token operator"}},[s._v("+")]),a("span",{attrs:{class:"token comment"}},[s._v("----+-------------+--------+------------+------+-----------------------+------+---------+------+------+----------+-------------+")]),s._v("\n"),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{attrs:{class:"token keyword"}},[s._v("set")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("1")]),s._v(" warning "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n \n")])])]),a("p",[s._v("两个不等于的情况，都没有用到索引")])])}],!1,null,null,null);r.options.__file="13.索引优化05.md";t.default=r.exports}}]);