SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "KickstarterStatus2/": "src/"
  },
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "KickstarterStatus2/index.js",
        "KickstarterStatus2/App.js",
        "KickstarterStatus2/data.js",
        "npm:whatwg-fetch@1.0.0/fetch.js",
        "npm:whatwg-fetch@1.0.0.json",
        "npm:systemjs-plugin-babel@0.0.14.json",
        "KickstarterStatus2/ProjectInfo.js",
        "npm:currency-formatter@1.0.4/index.js",
        "npm:currency-formatter@1.0.4.json",
        "npm:accounting@0.4.1/accounting.js",
        "npm:accounting@0.4.1.json",
        "npm:currency-formatter@1.0.4/currencies.js",
        "npm:moment@2.15.0/moment.js",
        "npm:moment@2.15.0.json",
        "KickstarterStatus2/ProgressBar.js",
        "npm:react@15.3.1/react.js",
        "npm:react@15.3.1.json",
        "github:jspm/nodelibs-process@0.2.0-alpha/process.js",
        "github:jspm/nodelibs-process@0.2.0-alpha.json",
        "npm:react@15.3.1/lib/React.js",
        "npm:react@15.3.1/lib/ReactElementValidator.js",
        "npm:fbjs@0.8.4/lib/warning.js",
        "npm:fbjs@0.8.4.json",
        "npm:fbjs@0.8.4/lib/emptyFunction.js",
        "npm:react@15.3.1/lib/getIteratorFn.js",
        "npm:react@15.3.1/lib/canDefineProperty.js",
        "npm:react@15.3.1/lib/checkReactTypeSpec.js",
        "npm:react@15.3.1/lib/ReactComponentTreeHook.js",
        "npm:fbjs@0.8.4/lib/invariant.js",
        "npm:react@15.3.1/lib/ReactCurrentOwner.js",
        "npm:react@15.3.1/lib/reactProdInvariant.js",
        "npm:react@15.3.1/lib/ReactPropTypesSecret.js",
        "npm:react@15.3.1/lib/ReactPropTypeLocationNames.js",
        "npm:react@15.3.1/lib/ReactPropTypeLocations.js",
        "npm:fbjs@0.8.4/lib/keyMirror.js",
        "npm:react@15.3.1/lib/ReactElement.js",
        "npm:object-assign@4.1.0/index.js",
        "npm:object-assign@4.1.0.json",
        "npm:react@15.3.1/lib/onlyChild.js",
        "npm:react@15.3.1/lib/ReactVersion.js",
        "npm:react@15.3.1/lib/ReactPropTypes.js",
        "npm:react@15.3.1/lib/ReactDOMFactories.js",
        "npm:react@15.3.1/lib/ReactClass.js",
        "npm:fbjs@0.8.4/lib/keyOf.js",
        "npm:fbjs@0.8.4/lib/emptyObject.js",
        "npm:react@15.3.1/lib/ReactNoopUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactComponent.js",
        "npm:react@15.3.1/lib/ReactPureComponent.js",
        "npm:react@15.3.1/lib/ReactChildren.js",
        "npm:react@15.3.1/lib/traverseAllChildren.js",
        "npm:react@15.3.1/lib/KeyEscapeUtils.js",
        "npm:react@15.3.1/lib/PooledClass.js",
        "npm:systemjs-plugin-babel@0.0.14/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.14/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.14/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.14/babel-helpers/classCallCheck.js",
        "npm:react-dom@15.3.1/index.js",
        "npm:react-dom@15.3.1.json",
        "npm:react@15.3.1/lib/ReactDOM.js",
        "npm:react@15.3.1/lib/ReactDOMNullInputValuePropHook.js",
        "npm:react@15.3.1/lib/ReactDOMUnknownPropertyHook.js",
        "npm:react@15.3.1/lib/EventPluginRegistry.js",
        "npm:react@15.3.1/lib/DOMProperty.js",
        "npm:react@15.3.1/lib/ReactInstrumentation.js",
        "npm:react@15.3.1/lib/ReactDebugTool.js",
        "npm:fbjs@0.8.4/lib/performanceNow.js",
        "npm:fbjs@0.8.4/lib/performance.js",
        "npm:fbjs@0.8.4/lib/ExecutionEnvironment.js",
        "npm:react@15.3.1/lib/ReactChildrenMutationWarningHook.js",
        "npm:react@15.3.1/lib/ReactHostOperationHistoryHook.js",
        "npm:react@15.3.1/lib/ReactInvalidSetStateWarningHook.js",
        "npm:react@15.3.1/lib/renderSubtreeIntoContainer.js",
        "npm:react@15.3.1/lib/ReactMount.js",
        "npm:react@15.3.1/lib/shouldUpdateReactComponent.js",
        "npm:react@15.3.1/lib/setInnerHTML.js",
        "npm:react@15.3.1/lib/createMicrosoftUnsafeLocalFunction.js",
        "npm:react@15.3.1/lib/DOMNamespaces.js",
        "npm:react@15.3.1/lib/instantiateReactComponent.js",
        "npm:react@15.3.1/lib/ReactHostComponent.js",
        "npm:react@15.3.1/lib/ReactEmptyComponent.js",
        "npm:react@15.3.1/lib/ReactCompositeComponent.js",
        "npm:fbjs@0.8.4/lib/shallowEqual.js",
        "npm:react@15.3.1/lib/ReactReconciler.js",
        "npm:react@15.3.1/lib/ReactRef.js",
        "npm:react@15.3.1/lib/ReactOwner.js",
        "npm:react@15.3.1/lib/ReactNodeTypes.js",
        "npm:react@15.3.1/lib/ReactInstanceMap.js",
        "npm:react@15.3.1/lib/ReactErrorUtils.js",
        "npm:react@15.3.1/lib/ReactComponentEnvironment.js",
        "npm:react@15.3.1/lib/ReactUpdates.js",
        "npm:react@15.3.1/lib/Transaction.js",
        "npm:react@15.3.1/lib/ReactFeatureFlags.js",
        "npm:react@15.3.1/lib/CallbackQueue.js",
        "npm:react@15.3.1/lib/ReactUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactMarkupChecksum.js",
        "npm:react@15.3.1/lib/adler32.js",
        "npm:react@15.3.1/lib/ReactDOMFeatureFlags.js",
        "npm:react@15.3.1/lib/ReactDOMContainerInfo.js",
        "npm:react@15.3.1/lib/validateDOMNesting.js",
        "npm:react@15.3.1/lib/ReactDOMComponentTree.js",
        "npm:react@15.3.1/lib/ReactDOMComponentFlags.js",
        "npm:react@15.3.1/lib/ReactBrowserEventEmitter.js",
        "npm:react@15.3.1/lib/isEventSupported.js",
        "npm:react@15.3.1/lib/getVendorPrefixedEventName.js",
        "npm:react@15.3.1/lib/ViewportMetrics.js",
        "npm:react@15.3.1/lib/ReactEventEmitterMixin.js",
        "npm:react@15.3.1/lib/EventPluginHub.js",
        "npm:react@15.3.1/lib/forEachAccumulated.js",
        "npm:react@15.3.1/lib/accumulateInto.js",
        "npm:react@15.3.1/lib/EventPluginUtils.js",
        "npm:react@15.3.1/lib/EventConstants.js",
        "npm:react@15.3.1/lib/DOMLazyTree.js",
        "npm:react@15.3.1/lib/setTextContent.js",
        "npm:react@15.3.1/lib/escapeTextContentForBrowser.js",
        "npm:react@15.3.1/lib/getHostComponentFromComposite.js",
        "npm:react@15.3.1/lib/findDOMNode.js",
        "npm:react@15.3.1/lib/ReactDefaultInjection.js",
        "npm:react@15.3.1/lib/SimpleEventPlugin.js",
        "npm:react@15.3.1/lib/getEventCharCode.js",
        "npm:react@15.3.1/lib/SyntheticWheelEvent.js",
        "npm:react@15.3.1/lib/SyntheticMouseEvent.js",
        "npm:react@15.3.1/lib/getEventModifierState.js",
        "npm:react@15.3.1/lib/SyntheticUIEvent.js",
        "npm:react@15.3.1/lib/getEventTarget.js",
        "npm:react@15.3.1/lib/SyntheticEvent.js",
        "npm:react@15.3.1/lib/SyntheticTransitionEvent.js",
        "npm:react@15.3.1/lib/SyntheticTouchEvent.js",
        "npm:react@15.3.1/lib/SyntheticDragEvent.js",
        "npm:react@15.3.1/lib/SyntheticKeyboardEvent.js",
        "npm:react@15.3.1/lib/getEventKey.js",
        "npm:react@15.3.1/lib/SyntheticFocusEvent.js",
        "npm:react@15.3.1/lib/SyntheticClipboardEvent.js",
        "npm:react@15.3.1/lib/SyntheticAnimationEvent.js",
        "npm:react@15.3.1/lib/EventPropagators.js",
        "npm:fbjs@0.8.4/lib/EventListener.js",
        "npm:react@15.3.1/lib/SelectEventPlugin.js",
        "npm:react@15.3.1/lib/isTextInputElement.js",
        "npm:fbjs@0.8.4/lib/getActiveElement.js",
        "npm:react@15.3.1/lib/ReactInputSelection.js",
        "npm:fbjs@0.8.4/lib/focusNode.js",
        "npm:fbjs@0.8.4/lib/containsNode.js",
        "npm:fbjs@0.8.4/lib/isTextNode.js",
        "npm:fbjs@0.8.4/lib/isNode.js",
        "npm:react@15.3.1/lib/ReactDOMSelection.js",
        "npm:react@15.3.1/lib/getTextContentAccessor.js",
        "npm:react@15.3.1/lib/getNodeForCharacterOffset.js",
        "npm:react@15.3.1/lib/SVGDOMPropertyConfig.js",
        "npm:react@15.3.1/lib/ReactReconcileTransaction.js",
        "npm:react@15.3.1/lib/ReactInjection.js",
        "npm:react@15.3.1/lib/ReactEventListener.js",
        "npm:fbjs@0.8.4/lib/getUnboundedScrollPosition.js",
        "npm:react@15.3.1/lib/ReactDefaultBatchingStrategy.js",
        "npm:react@15.3.1/lib/ReactDOMTextComponent.js",
        "npm:react@15.3.1/lib/DOMChildrenOperations.js",
        "npm:react@15.3.1/lib/ReactMultiChildUpdateTypes.js",
        "npm:react@15.3.1/lib/Danger.js",
        "npm:fbjs@0.8.4/lib/createNodesFromMarkup.js",
        "npm:fbjs@0.8.4/lib/getMarkupWrap.js",
        "npm:fbjs@0.8.4/lib/createArrayFromMixed.js",
        "npm:react@15.3.1/lib/ReactDOMTreeTraversal.js",
        "npm:react@15.3.1/lib/ReactDOMEmptyComponent.js",
        "npm:react@15.3.1/lib/ReactDOMComponent.js",
        "npm:react@15.3.1/lib/ReactServerRenderingTransaction.js",
        "npm:react@15.3.1/lib/ReactServerUpdateQueue.js",
        "npm:react@15.3.1/lib/ReactMultiChild.js",
        "npm:react@15.3.1/lib/flattenChildren.js",
        "npm:react@15.3.1/lib/ReactChildReconciler.js",
        "npm:react@15.3.1/lib/ReactDOMTextarea.js",
        "npm:react@15.3.1/lib/LinkedValueUtils.js",
        "npm:react@15.3.1/lib/DisabledInputUtils.js",
        "npm:react@15.3.1/lib/ReactDOMSelect.js",
        "npm:react@15.3.1/lib/ReactDOMOption.js",
        "npm:react@15.3.1/lib/ReactDOMInput.js",
        "npm:react@15.3.1/lib/DOMPropertyOperations.js",
        "npm:react@15.3.1/lib/quoteAttributeValueForBrowser.js",
        "npm:react@15.3.1/lib/ReactDOMButton.js",
        "npm:react@15.3.1/lib/CSSPropertyOperations.js",
        "npm:fbjs@0.8.4/lib/memoizeStringOnly.js",
        "npm:fbjs@0.8.4/lib/hyphenateStyleName.js",
        "npm:fbjs@0.8.4/lib/hyphenate.js",
        "npm:react@15.3.1/lib/dangerousStyleValue.js",
        "npm:react@15.3.1/lib/CSSProperty.js",
        "npm:fbjs@0.8.4/lib/camelizeStyleName.js",
        "npm:fbjs@0.8.4/lib/camelize.js",
        "npm:react@15.3.1/lib/AutoFocusUtils.js",
        "npm:react@15.3.1/lib/ReactComponentBrowserEnvironment.js",
        "npm:react@15.3.1/lib/ReactDOMIDOperations.js",
        "npm:react@15.3.1/lib/HTMLDOMPropertyConfig.js",
        "npm:react@15.3.1/lib/EnterLeaveEventPlugin.js",
        "npm:react@15.3.1/lib/DefaultEventPluginOrder.js",
        "npm:react@15.3.1/lib/ChangeEventPlugin.js",
        "npm:react@15.3.1/lib/BeforeInputEventPlugin.js",
        "npm:react@15.3.1/lib/SyntheticInputEvent.js",
        "npm:react@15.3.1/lib/SyntheticCompositionEvent.js",
        "npm:react@15.3.1/lib/FallbackCompositionState.js",
        "github:capaj/systemjs-hot-reloader@0.6.0/default-listener.js",
        "github:capaj/systemjs-hot-reloader@0.6.0.json",
        "github:capaj/systemjs-hot-reloader@0.6.0/hot-reloader.js",
        "npm:debug@2.2.0/browser.js",
        "npm:debug@2.2.0.json",
        "npm:debug@2.2.0/debug.js",
        "npm:ms@0.7.1/index.js",
        "npm:ms@0.7.1.json",
        "npm:weakee@1.0.0/weakee.js",
        "npm:weakee@1.0.0.json",
        "github:socketio/socket.io-client@1.4.8/socket.io.js",
        "github:socketio/socket.io-client@1.4.8.json"
      ]
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.14",
      "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0"
    },
    "packages": {
      "npm:babel-plugin-transform-react-jsx@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
          "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.13.0"
        }
      },
      "npm:babel-helper-builder-react-jsx@6.9.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "lodash": "npm:lodash@4.15.0",
          "esutils": "npm:esutils@2.0.2",
          "babel-types": "npm:babel-types@6.15.0"
        }
      },
      "npm:babel-runtime@6.11.6": {
        "map": {
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
          "core-js": "npm:core-js@2.4.1"
        }
      },
      "npm:babel-types@6.15.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "esutils": "npm:esutils@2.0.2",
          "lodash": "npm:lodash@4.15.0",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "KickstarterStatus2": {
      "main": "KickstarterStatus2.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel",
          "babelOptions": {
            "stage1": true,
            "plugins": [
              "babel-plugin-transform-react-jsx"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "currency-formatter": "npm:currency-formatter@1.0.4",
    "moment": "npm:moment@2.15.0",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@15.3.1",
    "react-dom": "npm:react-dom@15.3.1",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:capaj/systemjs-hot-reloader@0.6.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "weakee": "npm:weakee@1.0.0",
        "socket.io-client": "github:socketio/socket.io-client@1.4.8"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:react@15.3.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.4",
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:fbjs@0.8.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.1.1",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10",
        "immutable": "npm:immutable@3.8.1"
      }
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@1.0.0",
        "node-fetch": "npm:node-fetch@1.6.1"
      }
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.4"
      }
    },
    "npm:node-fetch@1.6.1": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.1.2"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.5",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6",
        "create-hmac": "npm:create-hmac@1.1.4",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:pbkdf2@3.0.5": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.5",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.0"
      }
    },
    "npm:stream-http@2.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:currency-formatter@1.0.4": {
      "map": {
        "accounting": "npm:accounting@0.4.1"
      }
    }
  }
});
