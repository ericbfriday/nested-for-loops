'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nested-for-loops documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ca0b97939292226baed92f69365457a2"' : 'data-target="#xs-components-links-module-AppModule-ca0b97939292226baed92f69365457a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ca0b97939292226baed92f69365457a2"' :
                                            'id="xs-components-links-module-AppModule-ca0b97939292226baed92f69365457a2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-ca0b97939292226baed92f69365457a2"' : 'data-target="#xs-injectables-links-module-AppModule-ca0b97939292226baed92f69365457a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ca0b97939292226baed92f69365457a2"' :
                                        'id="xs-injectables-links-module-AppModule-ca0b97939292226baed92f69365457a2"' }>
                                        <li class="link">
                                            <a href="injectables/NestedForLoopsRootFacade.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>NestedForLoopsRootFacade</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CodeModule.html" data-type="entity-link">CodeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' : 'data-target="#xs-components-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' :
                                            'id="xs-components-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' }>
                                            <li class="link">
                                                <a href="components/EditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' : 'data-target="#xs-injectables-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' :
                                        'id="xs-injectables-links-module-CodeModule-d173a6d5e94c4601b03f12e5b1bf699a"' }>
                                        <li class="link">
                                            <a href="injectables/CodeFacade.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CodeFacade</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CodeLoaded.html" data-type="entity-link">CodeLoaded</a>
                            </li>
                            <li class="link">
                                <a href="classes/CodeLoadError.html" data-type="entity-link">CodeLoadError</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadCode.html" data-type="entity-link">LoadCode</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoadNestedForLoopsRoot.html" data-type="entity-link">LoadNestedForLoopsRoot</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedForLoopsRootLoaded.html" data-type="entity-link">NestedForLoopsRootLoaded</a>
                            </li>
                            <li class="link">
                                <a href="classes/NestedForLoopsRootLoadError.html" data-type="entity-link">NestedForLoopsRootLoadError</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CodeEffects.html" data-type="entity-link">CodeEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodeFacade.html" data-type="entity-link">CodeFacade</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NestedForLoopsRootEffects.html" data-type="entity-link">NestedForLoopsRootEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NestedForLoopsRootFacade.html" data-type="entity-link">NestedForLoopsRootFacade</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CodePartialState.html" data-type="entity-link">CodePartialState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CodeState.html" data-type="entity-link">CodeState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entity.html" data-type="entity-link">Entity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entity-1.html" data-type="entity-link">Entity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NestedForLoopsRootPartialState.html" data-type="entity-link">NestedForLoopsRootPartialState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NestedForLoopsRootState.html" data-type="entity-link">NestedForLoopsRootState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});