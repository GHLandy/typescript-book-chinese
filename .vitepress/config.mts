import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "深入理解 TypeScript",
  description: "TypeScript Deep Dive 中文版",
  srcDir: "docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "TypeScript", link: "/README" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      { text: "TypeScript", link: "/README" },
      {
        text: "TypeScript 项目",
        items: [
          { text: "编译上下文", link: "/project/compilationContext" },
          { text: "声明空间", link: "/project/declarationspaces" },
          { text: "模块", link: "/project/modules" },
          { text: "命名空间", link: "/project/namespaces" },
          { text: "动态导入表达式", link: "/project/dynamicImportExpressions" },
        ],
      },
      {
        text: "TypeScript 类型系统",
        items: [
          { text: "概览", link: "/typings/overview" },
          { text: "从 JavaScript 迁移", link: "/typings/migrating" },
          { text: "@types", link: "/typings/types" },
          { text: "环境声明", link: "/typings/ambient" },
          { text: "接口", link: "/typings/interfaces" },
          { text: "枚举", link: "/typings/enums" },
          { text: "lib.d.ts", link: "/typings/lib" },
          { text: "函数", link: "/typings/functions" },
          { text: "可调用的", link: "/typings/callable" },
          { text: "类型断言", link: "/typings/typeAssertion" },
          { text: "Freshness", link: "/typings/freshness" },
          { text: "类型保护", link: "/typings/typeGuard" },
          { text: "字面量类型", link: "/typings/literals" },
          { text: "readonly", link: "/typings/readonly" },
          { text: "泛型", link: "/typings/generices" },
          { text: "类型推断", link: "/typings/typeInference" },
          { text: "类型兼容性", link: "/typings/typeCompatibility" },
          { text: "Never", link: "/typings/neverType" },
          { text: "辨析联合类型", link: "/typings/discrominatedUnion" },
          { text: "索引签名", link: "/typings/indexSignatures" },
          { text: "流动的类型", link: "/typings/movingTypes" },
          { text: "异常处理", link: "/typings/exceptionsHanding" },
          { text: "混合", link: "/typings/mixins" },
          { text: "ThisType", link: "/typings/thisType" },
        ],
      },
      {
        text: "JSX",
        items: [
          { text: "支持 JSX", link: "/jsx/support" },
          { text: "React JSX", link: "/jsx/reactJSX" },
          { text: "非 React JSX", link: "/jsx/nonReactJSX" },
        ],
      },
      {
        text: "TypeScript 错误提示",
        items: [
          { text: "解读 Errors", link: "/error/interpreting" },
          { text: "常见的 Error", link: "/error/common" },
        ],
      },
      {
        text: "Tips",
        items: [
          { text: "基于字符串的枚举", link: "/tips/stringBasedEmuns" },
          { text: "名义化类型", link: "/tips/nominalTyping" },
          { text: "状态函数", link: "/tips/statefulFunctions" },
          { text: "Bind 是有害的", link: "/tips/bind" },
          { text: "柯里化", link: "/tips/curry" },
          { text: "泛型的实例化类型", link: "/tips/typeInstantiation" },
          {
            text: "对象字面量的惰性初始化",
            link: "/tips/lazyObjectLiteralInitialization",
          },
          { text: "类是有用的", link: "/tips/classAreUseful" },
          {
            text: "export default 被认为是有害的",
            link: "/tips/avoidExportDefault",
          },
          {
            text: "减少 setter 属性的使用",
            link: "/tips/limitPropertySetters",
          },
          { text: "创建数组", link: "/tips/createArrays" },
          { text: "谨慎使用 --outFile", link: "/tips/outFileCaution" },
          {
            text: "TypeScript 中的静态构造函数",
            link: "/tips/staticConstructors",
          },
          { text: "单例模式", link: "/tips/singletonPatern" },
          { text: "函数参数", link: "/tips/functionParameters" },
          { text: "Truthy", link: "/tips/truthy" },
          { text: "构建切换", link: "/tips/buildToggles" },
          {
            text: "类型安全的 Event Emitter",
            link: "/tips/typesafeEventEmitter",
          },
          { text: "Reflect Metadata", link: "/tips/metadata" },
          { text: "协变与逆变", link: "/tips/covarianceAndContravariance" },
          { text: "infer", link: "/tips/infer" },
        ],
      },
      {
        text: "TypeScript 编译原理",
        items: [
          { text: "概览", link: "/compiler/overview" },
          { text: "程序", link: "/compiler/program" },
          { text: "抽象语法树", link: "/compiler/ast" },
          { text: "扫描器", link: "/compiler/scanner" },
          { text: "解析器", link: "/compiler/parser" },
          { text: "绑定器", link: "/compiler/binder" },
          { text: "检查器", link: "/compiler/checker" },
          { text: "发射器", link: "/compiler/emitter" },
        ],
      },
      {
        text: "TypeScript FAQs",
        items: [
          {
            text: "一些常见的「bug」并不是 bug",
            link: "/faqs/common-bug-not-bugs",
          },
          {
            text: "一些常见的 Feature 需求",
            link: "/faqs/common-feature-request",
          },
          { text: "类型系统的行为", link: "/faqs/type-system-behavior" },
          { text: "函数", link: "/faqs/function" },
          { text: "类", link: "/faqs/class" },
          { text: "泛型", link: "/faqs/generics" },
          { text: "模块", link: "/faqs/modules" },
          { text: "枚举", link: "/faqs/enums" },
          { text: "类型守卫", link: "/faqs/type-guards" },
          { text: "JSX 和 React", link: "/faqs/jsx-and-react" },
          {
            text: "一些不能按预期工作的代码",
            link: "/faqs/thing-that-dont-work",
          },
          { text: "命令行的行为", link: "/faqs/commandline-behavior" },
          { text: "tsconfig.json 的行为", link: "/faqs/tsconfig-behavior" },
        ],
      },
      {
        text: "TypeScript 更新",
        items: [
          { text: "TypeScript 3.9", link: "/new/typescript-3.9" },
          { text: "TypeScript 3.8", link: "/new/typescript-3.8" },
          { text: "TypeScript 3.7", link: "/new/typescript-3.7" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/GHLandy/typescript-book-chinese",
      },
    ],
  },
});
