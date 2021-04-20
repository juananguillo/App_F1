/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IDriver } from "../../App-F1/src/app/clases/Idriver";
export namespace Components {
    interface F1Table {
        "arrayData": IDriver[] | string;
    }
}
declare global {
    interface HTMLF1TableElement extends Components.F1Table, HTMLStencilElement {
    }
    var HTMLF1TableElement: {
        prototype: HTMLF1TableElement;
        new (): HTMLF1TableElement;
    };
    interface HTMLElementTagNameMap {
        "f1-table": HTMLF1TableElement;
    }
}
declare namespace LocalJSX {
    interface F1Table {
        "arrayData"?: IDriver[] | string;
    }
    interface IntrinsicElements {
        "f1-table": F1Table;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "f1-table": LocalJSX.F1Table & JSXBase.HTMLAttributes<HTMLF1TableElement>;
        }
    }
}
