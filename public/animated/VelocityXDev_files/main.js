import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/main.ts
import { platformBrowser } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_platform-browser.js?v=39868541";

// src/app/app.module.ts
import { NgModule as NgModule2 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import { BrowserModule, provideClientHydration, withEventReplay } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_platform-browser.js?v=39868541";

// src/app/app-routing.module.ts
import { NgModule } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import { RouterModule } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_router.js?v=39868541";

// src/app/client/home/home.component.ts
import { Component as Component15 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import { Validators as Validators3 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_forms.js?v=39868541";
import * as i016 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i14 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_forms.js?v=39868541";

// src/app/service/invoker.service.ts
var invoker_service_exports = {};
__export(invoker_service_exports, {
  InvokerService: () => InvokerService
});
import { Injectable } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import { HttpHeaders } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_common_http.js?v=39868541";
import { map } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/rxjs.js?v=39868541";
import * as i0 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i1 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_common_http.js?v=39868541";
var InvokerService = class _InvokerService {
  http;
  apiUrlClient = "http://localhost:3001/velocityxdev/dnk1/admin/getclients";
  // Backend URL for Client
  apiUrlReview = "http://localhost:3001/velocityxdev/dnk1/admin/getreviews";
  // Backend URL for Review
  apiUrlClientdelete = "http://localhost:3001/velocityxdev/dnk1/admin/deleteclient";
  apiUrlReviewdelete = "http://localhost:3001/velocityxdev/dnk1/admin/deletereviews";
  // client opearions 
  apiUrlAddClientFromClient = "http://localhost:3001/velocityxdev/dnk1/client/addclient";
  apiUrlAddReviewFromClient = "http://localhost:3001/velocityxdev/dnk1/client/addreview";
  apiUrlGetReviewsForClient = "http://localhost:3001/velocityxdev/dnk1/client/viewreviews";
  //common operations 
  apiUrlViewReviews = "http://localhost:3001/velocityxdev/dnk1/client/viewreviews";
  apiUrlViewUpComingProjects = "http://localhost:3001/velocityxdev/dnk1/client/viewupcomingprojects";
  constructor(http) {
    this.http = http;
  }
  getClients() {
    const headers = this.getAuthHeaders();
    return this.http.get(this.apiUrlClient, { headers });
  }
  // Delete a client
  deleteClient(id) {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrlClientdelete}/${id}`, { headers });
  }
  //add client
  addClient(client) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.apiUrlAddClientFromClient, client, { headers });
  }
  // Get all reviews
  getReviewsForClient() {
    return this.http.get(this.apiUrlGetReviewsForClient).pipe(map((response) => response.reviews));
  }
  getReviews() {
    const headers = this.getAuthHeaders();
    return this.http.get(this.apiUrlReview, { headers });
  }
  //add review
  addReview(review) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post(this.apiUrlAddReviewFromClient, review, { headers });
  }
  // Delete a review
  deleteReview(id) {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrlReviewdelete}/${id}`, { headers });
  }
  getAuthHeaders() {
    const token = sessionStorage.getItem("authToken") || "";
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }
  static \u0275fac = function InvokerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvokerService)(i0.\u0275\u0275inject(i1.HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _InvokerService, factory: _InvokerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(InvokerService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: i1.HttpClient }], null);
})();

// src/app/client/home/home.component.ts
import * as i32 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_common.js?v=39868541";
import * as i4 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_router.js?v=39868541";

// src/app/app.component.ts
var app_component_exports = {};
__export(app_component_exports, {
  AppComponent: () => AppComponent
});
import { Component } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i02 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var AppComponent = class _AppComponent {
  title = "velocity-x-dev";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 4, vars: 0, consts: [[1, "page-content"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275element(0, "app-header");
      i02.\u0275\u0275elementStart(1, "div", 0);
      i02.\u0275\u0275element(2, "router-outlet");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(3, "app-footer");
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: '<app-header></app-header>\n<div class="page-content">\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>', styles: ["/* src/app/app.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n.page-content {\n  flex: 1;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.component.ts%40AppComponent";
  function AppComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(AppComponent, m.default, [i02], [Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AppComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AppComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/review-us/review-us.component.ts
var review_us_component_exports = {};
__export(review_us_component_exports, {
  ReviewUsComponent: () => ReviewUsComponent
});
import { Component as Component2 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import { Validators } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_forms.js?v=39868541";
import * as i03 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i12 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_forms.js?v=39868541";
import * as i3 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_common_http.js?v=39868541";
var _c0 = () => [0, 1, 2, 3, 4];
var _c1 = (a0) => ({ "gold": a0 });
function ReviewUsComponent_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementContainerStart(0);
    i03.\u0275\u0275text(1, "Name is required.");
    i03.\u0275\u0275elementContainerEnd();
  }
}
function ReviewUsComponent_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementContainerStart(0);
    i03.\u0275\u0275text(1, "Minimum 4 characters.");
    i03.\u0275\u0275elementContainerEnd();
  }
}
function ReviewUsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 15);
    i03.\u0275\u0275template(1, ReviewUsComponent_div_7_ng_container_1_Template, 2, 0, "ng-container", 16)(2, ReviewUsComponent_div_7_ng_container_2_Template, 2, 0, "ng-container", 16);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", ctx_r0.name == null ? null : ctx_r0.name.errors == null ? null : ctx_r0.name.errors["required"]);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", ctx_r0.name == null ? null : ctx_r0.name.errors == null ? null : ctx_r0.name.errors["minlength"]);
  }
}
function ReviewUsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 15);
    i03.\u0275\u0275text(1, "Select at least 1 star.");
    i03.\u0275\u0275elementEnd();
  }
}
function ReviewUsComponent_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementContainerStart(0);
    i03.\u0275\u0275text(1, "Comments required.");
    i03.\u0275\u0275elementContainerEnd();
  }
}
function ReviewUsComponent_div_10_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementContainerStart(0);
    i03.\u0275\u0275text(1, "Minimum 10 characters.");
    i03.\u0275\u0275elementContainerEnd();
  }
}
function ReviewUsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 15);
    i03.\u0275\u0275template(1, ReviewUsComponent_div_10_ng_container_1_Template, 2, 0, "ng-container", 16)(2, ReviewUsComponent_div_10_ng_container_2_Template, 2, 0, "ng-container", 16);
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", ctx_r0.description == null ? null : ctx_r0.description.errors == null ? null : ctx_r0.description.errors["required"]);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275property("ngIf", ctx_r0.description == null ? null : ctx_r0.description.errors == null ? null : ctx_r0.description.errors["minlength"]);
  }
}
function ReviewUsComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "span", 17);
    i03.\u0275\u0275listener("click", function ReviewUsComponent_span_12_Template_span_click_0_listener() {
      const star_r3 = i03.\u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r0.onStarClick(star_r3));
    });
    i03.\u0275\u0275text(1, " \u2605 ");
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r3 = ctx.$implicit;
    const ctx_r0 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275property("ngClass", i03.\u0275\u0275pureFunction1(1, _c1, ctx_r0.reviewForm.value.stars > star_r3));
  }
}
function ReviewUsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 18);
    i03.\u0275\u0275text(1, " Review submitted successfully! ");
    i03.\u0275\u0275elementEnd();
  }
}
function ReviewUsComponent_div_19_span_5_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "span", 22);
    i03.\u0275\u0275text(1, "\u2605");
    i03.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const review_r5 = i03.\u0275\u0275nextContext().$implicit;
    i03.\u0275\u0275property("ngClass", i03.\u0275\u0275pureFunction1(1, _c1, review_r5.numberOfStars > s_r4));
  }
}
function ReviewUsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 19)(1, "div", 20)(2, "h3");
    i03.\u0275\u0275text(3);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(4, "div", 7);
    i03.\u0275\u0275template(5, ReviewUsComponent_div_19_span_5_Template, 2, 3, "span", 21);
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275elementStart(6, "p");
    i03.\u0275\u0275text(7);
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r5 = ctx.$implicit;
    i03.\u0275\u0275advance(3);
    i03.\u0275\u0275textInterpolate(review_r5.name);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275property("ngForOf", i03.\u0275\u0275pureFunction0(3, _c0));
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(review_r5.description);
  }
}
function ReviewUsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275element(0, "div", 23);
  }
}
function ReviewUsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275element(0, "div", 23);
  }
}
var ReviewUsComponent = class _ReviewUsComponent {
  fb;
  reviewService;
  htppClient;
  constructor(fb, reviewService, htppClient) {
    this.fb = fb;
    this.reviewService = reviewService;
    this.htppClient = htppClient;
    this.reviewForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      stars: [1, [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }
  reviews = [];
  reviewForm;
  alertVisible = false;
  defaultReviews = [
    { name: "John Doe", description: "Excellent service and very friendly staff!", numberOfStars: 5 },
    { name: "Jane Smith", description: "Quick response and reliable support.", numberOfStars: 4 },
    { name: "Alex Johnson", description: "Highly recommend for fast delivery and quality work.", numberOfStars: 5 },
    { name: "Emily Davis", description: "Good experience overall, but room for improvement.", numberOfStars: 3 },
    { name: "Michael Brown", description: "Professional and timely service.", numberOfStars: 4 }
  ];
  get name() {
    return this.reviewForm.get("name");
  }
  get description() {
    return this.reviewForm.get("description");
  }
  get stars() {
    return this.reviewForm.get("stars");
  }
  onStarClick(starIndex) {
    this.reviewForm.patchValue({ stars: starIndex + 1 });
  }
  submitReview() {
    if (this.reviewForm.valid) {
      const reviewData = {
        name: this.reviewForm.value.name,
        numberOfStars: this.reviewForm.value.stars,
        // assuming 'stars' is your form control
        description: this.reviewForm.value.description
      };
      this.reviewService.addReview(reviewData).subscribe({
        next: () => {
          this.alertVisible = true;
          this.reviewForm.reset({ stars: 1 });
          this.loadReviews();
          setTimeout(() => this.alertVisible = false, 3e3);
        },
        error: (error) => {
          console.error("Error posting review:", error);
        }
      });
    } else {
      this.reviewForm.markAllAsTouched();
    }
  }
  resetForm() {
    this.reviewForm.reset({ stars: 1 });
  }
  loadReviews() {
    this.htppClient.get("http://localhost:3001/velocityxdev/dnk1/client/viewreviews").subscribe({
      next: (response) => {
        this.reviews = [...this.defaultReviews, ...response.reviews];
      },
      error: (err) => {
        console.error("Error fetching reviews:", err);
        this.reviews = [...this.defaultReviews];
      }
    });
  }
  ngOnInit() {
    this.loadReviews();
  }
  static \u0275fac = function ReviewUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewUsComponent)(i03.\u0275\u0275directiveInject(i12.FormBuilder), i03.\u0275\u0275directiveInject(InvokerService), i03.\u0275\u0275directiveInject(i3.HttpClient));
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _ReviewUsComponent, selectors: [["app-review-us"]], standalone: false, decls: 22, vars: 11, consts: [[1, "review-container"], [1, "top-row"], [1, "form-box"], [3, "ngSubmit", "formGroup"], ["id", "name", "formControlName", "name", "type", "text", "placeholder", "Your Name"], ["class", "error", 4, "ngIf"], ["id", "comments", "formControlName", "description", "rows", "4", "placeholder", "Write down your comments?"], [1, "stars"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "submit", 3, "disabled"], ["class", "alert", 4, "ngIf"], [1, "client-reviews"], [1, "reviews-container"], ["class", "review-card", 4, "ngFor", "ngForOf"], ["class", "review-card dummy", 4, "ngIf"], [1, "error"], [4, "ngIf"], [3, "click", "ngClass"], [1, "alert"], [1, "review-card"], [1, "review-header"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "review-card", "dummy"]], template: function ReviewUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      i03.\u0275\u0275text(4, "Submit Review");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(5, "form", 3);
      i03.\u0275\u0275listener("ngSubmit", function ReviewUsComponent_Template_form_ngSubmit_5_listener() {
        return ctx.submitReview();
      });
      i03.\u0275\u0275element(6, "input", 4);
      i03.\u0275\u0275template(7, ReviewUsComponent_div_7_Template, 3, 2, "div", 5)(8, ReviewUsComponent_div_8_Template, 2, 0, "div", 5);
      i03.\u0275\u0275element(9, "textarea", 6);
      i03.\u0275\u0275template(10, ReviewUsComponent_div_10_Template, 3, 2, "div", 5);
      i03.\u0275\u0275elementStart(11, "div", 7);
      i03.\u0275\u0275template(12, ReviewUsComponent_span_12_Template, 2, 3, "span", 8);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(13, "button", 9);
      i03.\u0275\u0275text(14, "Submit");
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275template(15, ReviewUsComponent_div_15_Template, 2, 0, "div", 10);
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(16, "div", 11);
      i03.\u0275\u0275text(17, "Client Reviews");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(18, "div", 12);
      i03.\u0275\u0275template(19, ReviewUsComponent_div_19_Template, 8, 4, "div", 13)(20, ReviewUsComponent_div_20_Template, 1, 0, "div", 14)(21, ReviewUsComponent_div_21_Template, 1, 0, "div", 14);
      i03.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance(5);
      i03.\u0275\u0275property("formGroup", ctx.reviewForm);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275property("ngIf", (ctx.name == null ? null : ctx.name.touched) && (ctx.name == null ? null : ctx.name.invalid));
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", (ctx.stars == null ? null : ctx.stars.touched) && (ctx.stars == null ? null : ctx.stars.invalid));
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275property("ngIf", (ctx.description == null ? null : ctx.description.touched) && (ctx.description == null ? null : ctx.description.invalid));
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275property("ngForOf", i03.\u0275\u0275pureFunction0(10, _c0));
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("disabled", ctx.reviewForm.invalid);
      i03.\u0275\u0275advance(2);
      i03.\u0275\u0275property("ngIf", ctx.alertVisible);
      i03.\u0275\u0275advance(4);
      i03.\u0275\u0275property("ngForOf", ctx.reviews);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.reviews.length % 3 !== 0);
      i03.\u0275\u0275advance();
      i03.\u0275\u0275property("ngIf", ctx.reviews.length % 3 === 1);
    }
  }, styles: ["\n\n.review-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.client-reviews[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-top: 30px;\n}\n.top-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.form-box[_ngcontent-%COMP%] {\n  flex: 0 1 250px;\n  background-color: #eaeaea;\n  border: 2px solid #360101;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  box-sizing: border-box;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 400px;\n}\n.form-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 15px;\n  align-self: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 8px;\n  align-self: flex-start;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px;\n  border-radius: 6px;\n  border: 2px solid #000000;\n  background-color: #eaeaea;\n  font-size: 14px;\n  color: black;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.error[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: red;\n  margin-top: -6px;\n  align-self: flex-start;\n}\n.stars[_ngcontent-%COMP%] {\n  font-size: 24px;\n  cursor: pointer;\n  color: #ccc;\n}\n.stars[_ngcontent-%COMP%]   .gold[_ngcontent-%COMP%] {\n  color: gold;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 20px auto 0;\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #aaa;\n}\n.alert[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: 10px;\n}\n.reviews-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: flex-start;\n  margin-top: 60px;\n}\n.review-card[_ngcontent-%COMP%] {\n  flex: 1 1 calc(33.33% - 20px);\n  background-color: #eaeaea;\n  border: 2px solid #5e17eb;\n  padding: 12px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  font-size: 14px;\n}\n.review-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: none;\n}\n.review-card.dummy[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  pointer-events: none;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.review-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.review-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin-top: 10px;\n}\n@media (max-width: 768px) {\n  .top-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .form-box[_ngcontent-%COMP%] {\n    margin-left: 0;\n    max-width: 100%;\n  }\n  .review-card[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n}\n/*# sourceMappingURL=review-us.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(ReviewUsComponent, [{
    type: Component2,
    args: [{ selector: "app-review-us", standalone: false, template: `<div class="review-container">
  <!-- Top section: Form -->
  <div class="top-row">
    <!-- Review Form -->
    <div class="form-box">
      <h3>Submit Review</h3>
      <form [formGroup]="reviewForm" (ngSubmit)="submitReview()">
        <!-- Name -->
        <input id="name" formControlName="name" type="text" placeholder="Your Name" />
        <div class="error" *ngIf="name?.touched && name?.invalid">
          <ng-container *ngIf="name?.errors?.['required']">Name is required.</ng-container>
          <ng-container *ngIf="name?.errors?.['minlength']">Minimum 4 characters.</ng-container>
        </div>
        <div class="error" *ngIf="stars?.touched && stars?.invalid">Select at least 1 star.</div>
        
        <!-- Comments -->
        <textarea id="comments" formControlName="description" rows="4" placeholder="Write down your comments?"></textarea>
        <div class="error" *ngIf="description?.touched && description?.invalid">
          <ng-container *ngIf="description?.errors?.['required']">Comments required.</ng-container>
          <ng-container *ngIf="description?.errors?.['minlength']">Minimum 10 characters.</ng-container>
        </div>

        <!-- Stars -->
        <div class="stars">
          <span *ngFor="let star of [0,1,2,3,4]" 
                (click)="onStarClick(star)" 
                [ngClass]="{'gold': reviewForm.value.stars > star}">
            &#9733;
          </span>
        </div>

        <button type="submit" [disabled]="reviewForm.invalid">Submit</button>
      </form>

      <div *ngIf="alertVisible" class="alert">
        Review submitted successfully!
      </div>
    </div>
  </div>

  <!-- Bottom Review Cards -->  
  <div class="client-reviews">Client Reviews</div>
  <div class="reviews-container">
    <div class="review-card" *ngFor="let review of reviews">
      <div class="review-header">
        <h3>{{ review.name }}</h3>
        <div class="stars">
          <span *ngFor="let s of [0,1,2,3,4]" [ngClass]="{'gold': review.numberOfStars > s}">&#9733;</span>
        </div>
      </div>
      <p>{{ review.description }}</p>
    </div>

    <!-- Dummy Cards to Maintain 3-per-row Layout -->
    <div class="review-card dummy" *ngIf="reviews.length % 3 !== 0"></div>
    <div class="review-card dummy" *ngIf="reviews.length % 3 === 1"></div>
  </div>
</div>
`, styles: ["/* src/app/client/review-us/review-us.component.css */\n.review-container {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.client-reviews {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n  margin-top: 30px;\n}\n.top-row {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.form-box {\n  flex: 0 1 250px;\n  background-color: #eaeaea;\n  border: 2px solid #360101;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  box-sizing: border-box;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 400px;\n}\n.form-box h3 {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 15px;\n  align-self: center;\n}\nform {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\nlabel {\n  font-weight: 600;\n  margin-top: 8px;\n  align-self: flex-start;\n}\ninput,\ntextarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px;\n  border-radius: 6px;\n  border: 2px solid #000000;\n  background-color: #eaeaea;\n  font-size: 14px;\n  color: black;\n}\ntextarea {\n  resize: vertical;\n}\n.error {\n  font-size: 12px;\n  color: red;\n  margin-top: -6px;\n  align-self: flex-start;\n}\n.stars {\n  font-size: 24px;\n  cursor: pointer;\n  color: #ccc;\n}\n.stars .gold {\n  color: gold;\n}\nbutton {\n  display: block;\n  margin: 20px auto 0;\n  background-color: #4caf50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\nbutton:hover {\n  transform: scale(1.05);\n}\nbutton:disabled {\n  background-color: #aaa;\n}\n.alert {\n  background-color: #4caf50;\n  color: white;\n  padding: 10px;\n  text-align: center;\n  border-radius: 6px;\n  margin-top: 10px;\n}\n.reviews-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  justify-content: flex-start;\n  margin-top: 60px;\n}\n.review-card {\n  flex: 1 1 calc(33.33% - 20px);\n  background-color: #eaeaea;\n  border: 2px solid #5e17eb;\n  padding: 12px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  font-size: 14px;\n}\n.review-card:hover {\n  transform: scale(1.05);\n  box-shadow: none;\n}\n.review-card.dummy {\n  background: transparent;\n  border: none;\n  pointer-events: none;\n}\n.review-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.review-header h3 {\n  margin: 0;\n  font-size: 16px;\n}\n.review-card p {\n  font-size: 14px;\n  margin-top: 10px;\n}\n@media (max-width: 768px) {\n  .top-row {\n    flex-direction: column;\n    align-items: center;\n  }\n  .form-box {\n    margin-left: 0;\n    max-width: 100%;\n  }\n  .review-card {\n    flex: 1 1 100%;\n  }\n}\n/*# sourceMappingURL=review-us.component.css.map */\n"] }]
  }], () => [{ type: i12.FormBuilder }, { type: InvokerService }, { type: i3.HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(ReviewUsComponent, { className: "ReviewUsComponent", filePath: "src/app/client/review-us/review-us.component.ts", lineNumber: 13 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Freview-us%2Freview-us.component.ts%40ReviewUsComponent";
  function ReviewUsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(ReviewUsComponent, m.default, [i03, i12, invoker_service_exports, i3], [Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ReviewUsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ReviewUsComponent_HmrLoad(d.timestamp)));
})();

// src/app/admin/login/login.component.ts
var login_component_exports = {};
__export(login_component_exports, {
  LoginComponent: () => LoginComponent
});
import { Component as Component3 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import { FormControl, FormGroup, Validators as Validators2 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_forms.js?v=39868541";
import * as i04 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i13 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_common_http.js?v=39868541";
import * as i2 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_router.js?v=39868541";
function LoginComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div");
    i04.\u0275\u0275text(1, "Email is required");
    i04.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div");
    i04.\u0275\u0275text(1, "Invalid email");
    i04.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div", 12);
    i04.\u0275\u0275template(1, LoginComponent_div_9_div_1_Template, 2, 0, "div", 13)(2, LoginComponent_div_9_div_2_Template, 2, 0, "div", 13);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function LoginComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div");
    i04.\u0275\u0275text(1, "Password is required");
    i04.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div");
    i04.\u0275\u0275text(1, "Min 6 characters");
    i04.\u0275\u0275elementEnd();
  }
}
function LoginComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div", 12);
    i04.\u0275\u0275template(1, LoginComponent_div_14_div_1_Template, 2, 0, "div", 13)(2, LoginComponent_div_14_div_2_Template, 2, 0, "div", 13);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]);
    i04.\u0275\u0275advance();
    i04.\u0275\u0275property("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]);
  }
}
function LoginComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "div", 14);
    i04.\u0275\u0275text(1);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate1(" ", ctx_r0.alertMessage, "\n");
  }
}
var LoginComponent = class _LoginComponent {
  http;
  router;
  loginForm = new FormGroup({
    email: new FormControl("", [Validators2.required, Validators2.email]),
    password: new FormControl("", [Validators2.required, Validators2.minLength(6)])
  });
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }
  alertMessage = "";
  showAlert(message) {
    this.alertMessage = message;
    setTimeout(() => {
      this.alertMessage = "";
    }, 3e3);
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.http.post("http://localhost:3001/velocityxdev/dnk1/admin/login", this.loginForm.value).subscribe({
        next: (res) => {
          sessionStorage.setItem("authToken", res.token);
          sessionStorage.setItem("admin", res.admin);
          this.router.navigate(["/dashboard"]);
        },
        error: (err) => {
          alert("Login failed: " + err.error.message || "Something went wrong");
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(i04.\u0275\u0275directiveInject(i13.HttpClient), i04.\u0275\u0275directiveInject(i2.Router));
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: false, decls: 18, vars: 5, consts: [[1, "wrapper"], [1, "card"], [1, "card-title"], [1, "login-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "Enter email"], ["class", "error", 4, "ngIf"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "password", "placeholder", "Enter password"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "alert", 4, "ngIf"], [1, "error"], [4, "ngIf"], [1, "alert"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      i04.\u0275\u0275text(3, "Admin Login");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(4, "form", 3);
      i04.\u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() {
        return ctx.onSubmit();
      });
      i04.\u0275\u0275elementStart(5, "div", 4)(6, "label", 5);
      i04.\u0275\u0275text(7, "Email");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275element(8, "input", 6);
      i04.\u0275\u0275template(9, LoginComponent_div_9_Template, 3, 2, "div", 7);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(10, "div", 4)(11, "label", 8);
      i04.\u0275\u0275text(12, "Password");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275element(13, "input", 9);
      i04.\u0275\u0275template(14, LoginComponent_div_14_Template, 3, 2, "div", 7);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(15, "button", 10);
      i04.\u0275\u0275text(16, "Login");
      i04.\u0275\u0275elementEnd()()()();
      i04.\u0275\u0275template(17, LoginComponent_div_17_Template, 2, 1, "div", 11);
    }
    if (rf & 2) {
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275property("formGroup", ctx.loginForm);
      i04.\u0275\u0275advance(5);
      i04.\u0275\u0275property("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
      i04.\u0275\u0275advance(5);
      i04.\u0275\u0275property("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
      i04.\u0275\u0275advance();
      i04.\u0275\u0275property("disabled", ctx.loginForm.invalid);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275property("ngIf", ctx.alertMessage);
    }
  }, styles: ["\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%], \nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f9;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 40px 20px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #eaeaea;\n  border: 2px solid #5e17eb;\n  border-radius: 8px;\n  padding: 30px;\n  width: 100%;\n  max-width: 380px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.6rem;\n  margin-bottom: 20px;\n  color: #333;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n  font-size: 0.95rem;\n  color: #333;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  font-size: 0.95rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #5e17eb;\n  outline: none;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.85rem;\n  margin-top: 5px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 12px;\n  font-size: 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #4a0cd7;\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .card-title[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n  input[_ngcontent-%COMP%], \n   .btn-submit[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    padding: 10px;\n  }\n}\n.alert-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 1rem 1.5rem;\n  border-radius: 10px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n  font-size: 1rem;\n  text-align: center;\n  max-width: 90vw;\n  width: 320px;\n  z-index: 9999;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@media (max-width: 500px) {\n  .alert-box[_ngcontent-%COMP%] {\n    width: 90vw;\n    font-size: 0.95rem;\n    padding: 0.75rem 1rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -60%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(LoginComponent, [{
    type: Component3,
    args: [{ selector: "app-login", standalone: false, template: `<div class="wrapper">
  <div class="card">
    <h2 class="card-title">Admin Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input formControlName="email" id="email" type="email" placeholder="Enter email" />
        <div class="error" *ngIf="email?.invalid && email?.touched">
          <div *ngIf="email?.errors?.['required']">Email is required</div>
          <div *ngIf="email?.errors?.['email']">Invalid email</div>
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input formControlName="password" id="password" type="password" placeholder="Enter password" />
        <div class="error" *ngIf="password?.invalid && password?.touched">
          <div *ngIf="password?.errors?.['required']">Password is required</div>
          <div *ngIf="password?.errors?.['minlength']">Min 6 characters</div>
        </div>
      </div>

      <button type="submit" [disabled]="loginForm.invalid" class="btn-submit">Login</button>
    </form>
  </div>
</div>
<!-- block2 -->
 <div class="alert" *ngIf="alertMessage">
  {{ alertMessage }}
</div>`, styles: ["/* src/app/admin/login/login.component.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody,\nhtml {\n  height: 100%;\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f9;\n}\n.wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  padding: 40px 20px;\n}\n.card {\n  background: #eaeaea;\n  border: 2px solid #5e17eb;\n  border-radius: 8px;\n  padding: 30px;\n  width: 100%;\n  max-width: 380px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n.card-title {\n  text-align: center;\n  font-size: 1.6rem;\n  margin-bottom: 20px;\n  color: #333;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n}\n.form-group {\n  margin-bottom: 15px;\n}\nlabel {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n  font-size: 0.95rem;\n  color: #333;\n}\ninput {\n  width: 100%;\n  padding: 10px;\n  font-size: 0.95rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\ninput:focus {\n  border-color: #5e17eb;\n  outline: none;\n}\n.error {\n  color: red;\n  font-size: 0.85rem;\n  margin-top: 5px;\n}\n.btn-submit {\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 12px;\n  font-size: 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background 0.3s;\n}\n.btn-submit:hover {\n  background-color: #4a0cd7;\n}\n.btn-submit:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n@media (max-width: 480px) {\n  .card {\n    padding: 20px;\n  }\n  .card-title {\n    font-size: 1.4rem;\n  }\n  input,\n  .btn-submit {\n    font-size: 0.9rem;\n    padding: 10px;\n  }\n}\n.alert-box {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 1rem 1.5rem;\n  border-radius: 10px;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n  font-size: 1rem;\n  text-align: center;\n  max-width: 90vw;\n  width: 320px;\n  z-index: 9999;\n  animation: fadeIn 0.3s ease;\n}\n@media (max-width: 500px) {\n  .alert-box {\n    width: 90vw;\n    font-size: 0.95rem;\n    padding: 0.75rem 1rem;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translate(-50%, -60%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: i13.HttpClient }, { type: i2.Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/admin/login/login.component.ts", lineNumber: 13 });
})();
(() => {
  const id = "src%2Fapp%2Fadmin%2Flogin%2Flogin.component.ts%40LoginComponent";
  function LoginComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(LoginComponent, m.default, [i04, i13, i2], [Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && LoginComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && LoginComponent_HmrLoad(d.timestamp)));
})();

// src/app/admin/dashboard/dashboard.component.ts
var dashboard_component_exports = {};
__export(dashboard_component_exports, {
  DashboardComponent: () => DashboardComponent
});
import { Component as Component4 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i05 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
function DashboardComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "tr")(1, "td");
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(3, "td");
    i05.\u0275\u0275text(4);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(5, "td");
    i05.\u0275\u0275text(6);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(7, "td");
    i05.\u0275\u0275text(8);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(9, "td")(10, "button", 5);
    i05.\u0275\u0275listener("click", function DashboardComponent_tr_17_Template_button_click_10_listener() {
      const client_r2 = i05.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.deleteClient(client_r2._id));
    });
    i05.\u0275\u0275text(11, "Del");
    i05.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const client_r2 = ctx.$implicit;
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(client_r2.name);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(client_r2.phoneNumber);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(client_r2.description);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(client_r2.createdAt);
  }
}
function DashboardComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "tr")(1, "td");
    i05.\u0275\u0275text(2);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(3, "td");
    i05.\u0275\u0275text(4);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(5, "td");
    i05.\u0275\u0275text(6);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(7, "td");
    i05.\u0275\u0275text(8);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(9, "td")(10, "button", 5);
    i05.\u0275\u0275listener("click", function DashboardComponent_tr_33_Template_button_click_10_listener() {
      const review_r5 = i05.\u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.deleteReview(review_r5._id));
    });
    i05.\u0275\u0275text(11, "Del");
    i05.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r5 = ctx.$implicit;
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(review_r5.name);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(review_r5.numberOfStars);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(review_r5.description);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(review_r5.createdAt);
  }
}
var DashboardComponent = class _DashboardComponent {
  apiService;
  clients = [];
  reviews = [];
  constructor(apiService) {
    this.apiService = apiService;
  }
  ngOnInit() {
    this.fetchClients();
    this.fetchReviews();
  }
  // Fetch all clients
  fetchClients() {
    this.apiService.getClients().subscribe((data) => {
      this.clients = data;
    }, (error) => {
      console.error("Error fetching clients:", error);
    });
  }
  // Delete a client by ID
  deleteClient(id) {
    this.apiService.deleteClient(id).subscribe(() => {
      this.clients = this.clients.filter((client) => client._id !== id);
    }, (error) => {
      console.error("Error deleting client:", error);
    });
  }
  fetchReviews() {
    this.apiService.getReviews().subscribe((data) => {
      this.reviews = data;
    }, (error) => {
      console.error("Error fetching reviews:", error);
    });
  }
  // Delete a review by ID
  deleteReview(id) {
    this.apiService.deleteReview(id).subscribe(() => {
      this.reviews = this.reviews.filter((review) => review._id !== id);
    }, (error) => {
      console.error("Error deleting review:", error);
    });
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(i05.\u0275\u0275directiveInject(InvokerService));
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], standalone: false, decls: 34, vars: 2, consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-12", "col-lg-6", "mb-4", "table-section"], [1, "table", "table-striped", "table-responsive"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      i05.\u0275\u0275text(4, "Clients");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(5, "table", 3)(6, "thead")(7, "tr")(8, "th");
      i05.\u0275\u0275text(9, "Name");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(10, "th");
      i05.\u0275\u0275text(11, "Phone");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(12, "th");
      i05.\u0275\u0275text(13, "Description");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(14, "th");
      i05.\u0275\u0275text(15, "created on");
      i05.\u0275\u0275elementEnd()()();
      i05.\u0275\u0275elementStart(16, "tbody");
      i05.\u0275\u0275template(17, DashboardComponent_tr_17_Template, 12, 4, "tr", 4);
      i05.\u0275\u0275elementEnd()()();
      i05.\u0275\u0275elementStart(18, "div", 2)(19, "h3");
      i05.\u0275\u0275text(20, "Reviews");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(21, "table", 3)(22, "thead")(23, "tr")(24, "th");
      i05.\u0275\u0275text(25, "Name");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(26, "th");
      i05.\u0275\u0275text(27, "Stars");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(28, "th");
      i05.\u0275\u0275text(29, "Comments");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(30, "th");
      i05.\u0275\u0275text(31, "created on");
      i05.\u0275\u0275elementEnd()()();
      i05.\u0275\u0275elementStart(32, "tbody");
      i05.\u0275\u0275template(33, DashboardComponent_tr_33_Template, 12, 4, "tr", 4);
      i05.\u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      i05.\u0275\u0275advance(17);
      i05.\u0275\u0275property("ngForOf", ctx.clients);
      i05.\u0275\u0275advance(16);
      i05.\u0275\u0275property("ngForOf", ctx.reviews);
    }
  }, styles: ["\n\n.admin-header[_ngcontent-%COMP%] {\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 1rem 2rem;\n  margin: 1rem auto;\n  text-align: center;\n  border-radius: 12px;\n  max-width: 90%;\n  font-size: 1.25rem;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.table-section[_ngcontent-%COMP%] {\n  background: #eaeaea;\n  border: 2px solid #5e17eb;\n  border-radius: 10px;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #5e17eb;\n  margin-bottom: 1rem;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #eaeaea;\n}\nthead[_ngcontent-%COMP%] {\n  background-color: #5e17eb;\n  color: #fff;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  border: 1px solid #5e17eb;\n  padding: 10px;\n  text-align: center;\n}\ntd[_ngcontent-%COMP%]:last-child, \nth[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #ff4d4f;\n  color: white;\n  border: none;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background-color: #d9363e;\n}\n@media (max-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .table-section[_ngcontent-%COMP%] {\n    margin: 1rem auto;\n  }\n  th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    padding: 8px;\n  }\n  .admin-header[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding: 0.75rem 1.5rem;\n  }\n}\n@media (max-width: 576px) {\n  .table-section[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  th[_ngcontent-%COMP%], \n   td[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border: none;\n  background-color: transparent;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(DashboardComponent, [{
    type: Component4,
    args: [{ selector: "app-dashboard", standalone: false, template: '<div class="container mt-4">\n  <div class="row">\n    <div class="col-12 col-lg-6 mb-4 table-section">\n      <h3>Clients</h3>\n      <table class="table table-striped table-responsive">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Phone</th>\n            <th>Description</th>\n            <th>created on</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let client of clients">\n            <td>{{ client.name}}</td>\n            <td>{{ client.phoneNumber }}</td>\n            <td>{{ client.description }}</td>\n            <td>{{ client.createdAt }}</td>\n            <td>\n              <button class="btn btn-danger btn-sm" (click)="deleteClient(client._id!)">Del</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class="col-12 col-lg-6 mb-4 table-section">\n      <h3>Reviews</h3>\n      <table class="table table-striped table-responsive">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Stars</th>\n            <th>Comments</th>\n            <th>created on</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let review of reviews">\n            <td>{{ review.name }}</td>\n            <td>{{ review.numberOfStars }}</td>\n            <td>{{ review.description }}</td>\n            <td>{{review.createdAt}}</td>\n            <td>\n              <button class="btn btn-danger btn-sm" (click)="deleteReview(review._id!)">Del</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>', styles: ["/* src/app/admin/dashboard/dashboard.component.css */\n.admin-header {\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 1rem 2rem;\n  margin: 1rem auto;\n  text-align: center;\n  border-radius: 12px;\n  max-width: 90%;\n  font-size: 1.25rem;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.container {\n  max-width: 1200px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.table-section {\n  background: #eaeaea;\n  border: 2px solid #5e17eb;\n  border-radius: 10px;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);\n}\nh3 {\n  text-align: center;\n  color: #5e17eb;\n  margin-bottom: 1rem;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  background-color: #eaeaea;\n}\nthead {\n  background-color: #5e17eb;\n  color: #fff;\n}\nth,\ntd {\n  border: 1px solid #5e17eb;\n  padding: 10px;\n  text-align: center;\n}\ntd:last-child,\nth:last-child {\n  border-right: none;\n}\n.btn-danger {\n  background-color: #ff4d4f;\n  color: white;\n  border: none;\n  padding: 4px 12px;\n  font-size: 0.85rem;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n.btn-danger:hover {\n  background-color: #d9363e;\n}\n@media (max-width: 768px) {\n  .row {\n    flex-direction: column;\n  }\n  .table-section {\n    margin: 1rem auto;\n  }\n  th,\n  td {\n    font-size: 0.85rem;\n    padding: 8px;\n  }\n  .admin-header {\n    font-size: 1rem;\n    padding: 0.75rem 1.5rem;\n  }\n}\n@media (max-width: 576px) {\n  .table-section {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  table {\n    min-width: 600px;\n  }\n  th,\n  td {\n    font-size: 0.75rem;\n  }\n}\ntable td:last-child,\ntable th:last-child {\n  border: none;\n  background-color: transparent;\n}\n/*# sourceMappingURL=dashboard.component.css.map */\n"] }]
  }], () => [{ type: InvokerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/admin/dashboard/dashboard.component.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fadmin%2Fdashboard%2Fdashboard.component.ts%40DashboardComponent";
  function DashboardComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(DashboardComponent, m.default, [i05, invoker_service_exports], [Component4], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && DashboardComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && DashboardComponent_HmrLoad(d.timestamp)));
})();

// src/app/common/header/header.component.ts
var header_component_exports = {};
__export(header_component_exports, {
  HeaderComponent: () => HeaderComponent
});
import { Component as Component5 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i06 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var HeaderComponent = class _HeaderComponent {
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], standalone: false, decls: 33, vars: 2, consts: [[1, "header"], [1, "container"], [1, "logo"], ["src", "logo.png", "alt", "logo", 2, "height", "40", "width", "150px"], [1, "nav-area"], [1, "nav-links"], ["href", "#"], ["routerLink", "upcomingprojects"], [1, "dropdown"], [1, "dropdown-menu"], ["href", "webdevelopment"], ["href", "androiddevelopment"], ["href", "seooptimization"], ["routerLink", "carrers-for-you"], [1, "contact-btn"], ["routerLink", "/about-us"], [1, "hamburger", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2);
      i06.\u0275\u0275element(3, "img", 3);
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(4, "div", 4)(5, "nav")(6, "ul", 5)(7, "li")(8, "a", 6);
      i06.\u0275\u0275text(9, "Home");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(10, "li")(11, "a", 7);
      i06.\u0275\u0275text(12, "Upcoming projects");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(13, "li", 8)(14, "a");
      i06.\u0275\u0275text(15, "Services");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(16, "ul", 9)(17, "a", 10);
      i06.\u0275\u0275text(18, "Web Development");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(19, "a", 11);
      i06.\u0275\u0275text(20, "Andriod/IOS Development");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(21, "a", 12);
      i06.\u0275\u0275text(22, "SEO Optimization");
      i06.\u0275\u0275elementEnd()()();
      i06.\u0275\u0275elementStart(23, "li")(24, "a", 13);
      i06.\u0275\u0275text(25, "carrers");
      i06.\u0275\u0275elementEnd()()()();
      i06.\u0275\u0275elementStart(26, "div", 14)(27, "button", 15);
      i06.\u0275\u0275text(28, "About Us");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(29, "div", 16);
      i06.\u0275\u0275listener("click", function HeaderComponent_Template_div_click_29_listener() {
        return ctx.toggleMenu();
      });
      i06.\u0275\u0275element(30, "span")(31, "span")(32, "span");
      i06.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i06.\u0275\u0275advance(5);
      i06.\u0275\u0275classProp("active", ctx.menuOpen);
    }
  }, styles: ["\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f5f5f6;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 5%;\n  display: flex;\n  align-items: center;\n  height: 80px;\n  justify-content: space-between;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: bold;\n  color: #222;\n  flex: 0 0 auto;\n}\n.header[_ngcontent-%COMP%]   .nav-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: flex-end;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  margin-left: 10%;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 20px;\n  text-decoration: none;\n  color: #222;\n  font-size: 16px;\n  transition: color 0.3s ease;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #007BFF;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: #fff;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  z-index: 500;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  color: #222;\n  white-space: nowrap;\n  transition: background-color 0.3s, color 0.3s;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  color: #007BFF;\n}\n.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\n  display: block;\n}\n.header[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n.header[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #5e17eb;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 25px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.header[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n.header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  margin-left: 20px;\n}\n.header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 25px;\n  background: #333;\n  margin: 4px 0;\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n@media (max-width: 992px) {\n  .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%], \n   .header[_ngcontent-%COMP%]   .contact-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   nav.active[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 80px;\n    left: 0;\n    right: 0;\n    background: white;\n    padding-bottom: 20px;\n    z-index: 999;\n  }\n  .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 15px 0;\n  }\n  .header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(HeaderComponent, [{
    type: Component5,
    args: [{ selector: "app-header", standalone: false, template: '<header class="header">\n    <div class="container">\n      <div class="logo">\n       <img src="logo.png" alt="logo" style="height: 40; width: 150px;">\n      </div>\n  \n      <div class="nav-area">\n        <nav [class.active]="menuOpen">\n          <ul class="nav-links">\n            <li><a href="#">Home</a></li>\n            <li><a routerLink="upcomingprojects">Upcoming projects</a></li>\n            <li class="dropdown">\n              <a>Services</a>\n              <ul class="dropdown-menu">\n                <a href="webdevelopment">Web Development</a>\n                <a href="androiddevelopment">Andriod/IOS Development</a>\n                <a href="seooptimization">SEO Optimization</a>\n              </ul>\n            </li>\n            <li><a routerLink="carrers-for-you">carrers</a></li>\n          </ul>\n        </nav>\n  \n        <div class="contact-btn">\n          <button routerLink="/about-us">About Us</button>\n        </div>\n  \n        <div class="hamburger" (click)="toggleMenu()">\n          <span></span>\n          <span></span>\n          <span></span>\n        </div>\n      </div>\n    </div>\n  </header>\n  ', styles: ["/* src/app/common/header/header.component.css */\n.header {\n  width: 100%;\n  background: #f5f5f6;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}\n.header .container {\n  max-width: 1300px;\n  margin: 0 auto;\n  padding: 0 5%;\n  display: flex;\n  align-items: center;\n  height: 80px;\n  justify-content: space-between;\n}\n.header .logo {\n  font-size: 28px;\n  font-weight: bold;\n  color: #222;\n  flex: 0 0 auto;\n}\n.header .nav-area {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  justify-content: flex-end;\n}\n.header nav {\n  margin-left: 10%;\n}\n.header nav .nav-links {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n.header nav .nav-links li {\n  position: relative;\n}\n.header nav .nav-links li a {\n  display: block;\n  padding: 10px 20px;\n  text-decoration: none;\n  color: #222;\n  font-size: 16px;\n  transition: color 0.3s ease;\n}\n.header nav .nav-links li a:hover {\n  color: #007BFF;\n}\n.header nav .nav-links li .dropdown-menu {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  background: #fff;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  min-width: 200px;\n  z-index: 500;\n}\n.header nav .nav-links li .dropdown-menu li a {\n  padding: 10px 20px;\n  color: #222;\n  white-space: nowrap;\n  transition: background-color 0.3s, color 0.3s;\n}\n.header nav .nav-links li .dropdown-menu li a:hover {\n  background-color: #f8f9fa;\n  color: #007BFF;\n}\n.header nav .nav-links li:hover .dropdown-menu {\n  display: block;\n}\n.header .contact-btn {\n  margin-left: 30px;\n}\n.header .contact-btn button {\n  background-color: #5e17eb;\n  color: white;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 25px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.header .contact-btn button:hover {\n  background-color: #0056b3;\n}\n.header .hamburger {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  margin-left: 20px;\n}\n.header .hamburger span {\n  height: 3px;\n  width: 25px;\n  background: #333;\n  margin: 4px 0;\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n@media (max-width: 992px) {\n  .header nav,\n  .header .contact-btn {\n    display: none;\n  }\n  .header nav.active {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 80px;\n    left: 0;\n    right: 0;\n    background: white;\n    padding-bottom: 20px;\n    z-index: 999;\n  }\n  .header nav .nav-links {\n    flex-direction: column;\n  }\n  .header nav .nav-links li a {\n    padding: 15px 0;\n  }\n  .header .hamburger {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/common/header/header.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fcommon%2Fheader%2Fheader.component.ts%40HeaderComponent";
  function HeaderComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(HeaderComponent, m.default, [i06], [Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HeaderComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HeaderComponent_HmrLoad(d.timestamp)));
})();

// src/app/common/footer/footer.component.ts
var footer_component_exports = {};
__export(footer_component_exports, {
  FooterComponent: () => FooterComponent
});
import { Component as Component6 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i07 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: false, decls: 43, vars: 0, consts: [[1, "footer"], [1, "footer-row", "row-1"], [1, "follow-us"], [1, "social-icons"], ["href", "", "target", "_blank"], ["src", "icons/linkedin.svg", "alt", "LinkedIn", 1, "icon-white"], ["src", "icons/twitter-x.svg", "alt", "Twitter", 1, "icon-white"], ["src", "icons/instagram.svg", "alt", "instagram", 1, "icon-white"], [1, "footer-row", "row-2"], [1, "column"], ["href", "about-us"], ["href", "carrers-for-you"], ["href", "blogs"], ["href", "terms_condition&privacy_policy"], [1, "footer-row", "row-3"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      i07.\u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2);
      i07.\u0275\u0275text(3, "Follow Us");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(4, "div", 3)(5, "a", 4);
      i07.\u0275\u0275element(6, "img", 5);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(7, "a", 4);
      i07.\u0275\u0275element(8, "img", 6);
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(9, "a", 4);
      i07.\u0275\u0275element(10, "img", 7);
      i07.\u0275\u0275elementEnd()()();
      i07.\u0275\u0275elementStart(11, "div", 8)(12, "div", 9)(13, "h4");
      i07.\u0275\u0275text(14, "Company");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(15, "ul")(16, "li")(17, "a", 10);
      i07.\u0275\u0275text(18, "About Us");
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275elementStart(19, "li")(20, "a", 11);
      i07.\u0275\u0275text(21, "Careers");
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275elementStart(22, "li")(23, "a", 12);
      i07.\u0275\u0275text(24, "Blog");
      i07.\u0275\u0275elementEnd()()()();
      i07.\u0275\u0275elementStart(25, "div", 9)(26, "h4");
      i07.\u0275\u0275text(27, "Links");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(28, "ul")(29, "li")(30, "a", 13);
      i07.\u0275\u0275text(31, "Privacy Policy");
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275elementStart(32, "li")(33, "a", 13);
      i07.\u0275\u0275text(34, "Terms & Conditions");
      i07.\u0275\u0275elementEnd()()()();
      i07.\u0275\u0275elementStart(35, "div", 9)(36, "h4");
      i07.\u0275\u0275text(37, "Address");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(38, "p");
      i07.\u0275\u0275text(39, "501-1/5,indira nilaya,gowlidoddi,finacial district, KVRangareddy,500082");
      i07.\u0275\u0275elementEnd()()();
      i07.\u0275\u0275elementStart(40, "div", 14)(41, "p");
      i07.\u0275\u0275text(42, "\xA9 2025 Velocity Developers \u2014 Fast. Responsive. Reliable. All rights reserved. ");
      i07.\u0275\u0275elementEnd()()();
    }
  }, styles: ["\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n}\n.footer-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.row-1[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.follow-us[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  font-weight: bold;\n}\n.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.row-2[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.column[_ngcontent-%COMP%] {\n  width: 30%;\n}\n.column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\n.column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0;\n}\n.column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.row-3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.9em;\n  border-top: 1px solid #fff;\n  padding-top: 10px;\n}\n@media (max-width: 768px) {\n  .footer-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n  }\n  .row-1[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n  }\n  .social-icons[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .row-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n  }\n  .column[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .footer-row.row-3[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n.icon-white[_ngcontent-%COMP%] {\n  filter: invert(100%) brightness(200%);\n  transition: filter 0.3s ease;\n  width: 24px;\n  cursor: pointer;\n}\n.icon-white[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  filter: invert(70%) sepia(42%) saturate(451%) hue-rotate(147deg) brightness(92%) contrast(87%);\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(FooterComponent, [{
    type: Component6,
    args: [{ selector: "app-footer", standalone: false, template: '<footer class="footer">\n    <!-- Row 1: Social Media Links -->\n    <div class="footer-row row-1">\n      <div class="follow-us">Follow Us</div>\n      <div class="social-icons">\n        <a href="" target="_blank"><img src="icons/linkedin.svg" class="icon-white" alt="LinkedIn" /></a>\n        <a href="" target="_blank"><img src="icons/twitter-x.svg" class="icon-white" alt="Twitter" /></a>\n        <a href="" target="_blank"><img src="icons/instagram.svg" class="icon-white" alt="instagram" /></a>\n      </div>\n    </div>\n  \n    <!-- Row 2: Company Information -->\n    <div class="footer-row row-2">\n      <div class="column">\n        <h4>Company</h4>\n        <ul>\n          <li><a href="about-us">About Us</a></li>\n          <li><a href="carrers-for-you">Careers</a></li>\n          <li><a href="blogs">Blog</a></li>\n        </ul>\n      </div>\n      <div class="column">\n        <h4>Links</h4>\n        <ul>\n          <li><a href="terms_condition&privacy_policy">Privacy Policy</a></li>\n          <li><a href="terms_condition&privacy_policy">Terms & Conditions</a></li>\n        </ul>\n      </div>\n      <div class="column">\n        <h4>Address</h4>\n        <p>501-1/5,indira nilaya,gowlidoddi,finacial district,\n          KVRangareddy,500082</p>\n      </div>\n    </div>\n  \n    <!-- Row 3: Copyright Notice -->\n    <div class="footer-row row-3">\n      <p>\xA9 2025 Velocity Developers \u2014 Fast. Responsive. Reliable. All rights reserved.\n      </p>\n    </div>\n</footer>\n  ', styles: ["/* src/app/common/footer/footer.component.css */\n.footer {\n  background-color: #333;\n  color: #fff;\n  padding: 20px;\n}\n.footer-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.row-1 {\n  justify-content: space-between;\n}\n.follow-us {\n  font-size: 1.5em;\n  font-weight: bold;\n}\n.social-icons a {\n  margin-left: 20px;\n}\n.social-icons img {\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.row-2 {\n  justify-content: space-between;\n}\n.column {\n  width: 30%;\n}\n.column h4 {\n  margin-bottom: 10px;\n}\n.column ul {\n  list-style-type: none;\n  padding: 0;\n}\n.column ul li {\n  margin: 5px 0;\n}\n.column ul li a {\n  color: #fff;\n  text-decoration: none;\n}\n.column ul li a:hover {\n  text-decoration: underline;\n}\n.row-3 {\n  text-align: center;\n  font-size: 0.9em;\n  border-top: 1px solid #fff;\n  padding-top: 10px;\n}\n@media (max-width: 768px) {\n  .footer-row {\n    flex-direction: column;\n    text-align: center;\n  }\n  .row-1 {\n    margin-bottom: 15px;\n  }\n  .social-icons {\n    justify-content: center;\n  }\n  .row-2 {\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n  }\n  .column {\n    width: 80%;\n  }\n  .footer-row.row-3 {\n    font-size: 0.8em;\n  }\n}\n.icon-white {\n  filter: invert(100%) brightness(200%);\n  transition: filter 0.3s ease;\n  width: 24px;\n  cursor: pointer;\n}\n.icon-white:hover {\n  transform: scale(1.1);\n  filter: invert(70%) sepia(42%) saturate(451%) hue-rotate(147deg) brightness(92%) contrast(87%);\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/common/footer/footer.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fcommon%2Ffooter%2Ffooter.component.ts%40FooterComponent";
  function FooterComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(FooterComponent, m.default, [i07], [Component6], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && FooterComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && FooterComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/about-us/about-us.component.ts
var about_us_component_exports = {};
__export(about_us_component_exports, {
  AboutUsComponent: () => AboutUsComponent
});
import { Component as Component7 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i08 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
function AboutUsComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    i08.\u0275\u0275element(2, "img", 12);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(3, "div", 13)(4, "h3");
    i08.\u0275\u0275text(5);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(6, "p");
    i08.\u0275\u0275text(7);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(8, "p");
    i08.\u0275\u0275text(9);
    i08.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275property("src", member_r1.image, i08.\u0275\u0275sanitizeUrl)("alt", member_r1.name);
    i08.\u0275\u0275advance(3);
    i08.\u0275\u0275textInterpolate(member_r1.name);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(member_r1.role);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(member_r1.skills);
  }
}
function AboutUsComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    i08.\u0275\u0275element(2, "img", 12);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(3, "div", 13)(4, "h3");
    i08.\u0275\u0275text(5);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(6, "p");
    i08.\u0275\u0275text(7);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(8, "p");
    i08.\u0275\u0275text(9);
    i08.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275property("src", member_r2.image, i08.\u0275\u0275sanitizeUrl)("alt", member_r2.name);
    i08.\u0275\u0275advance(3);
    i08.\u0275\u0275textInterpolate(member_r2.name);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(member_r2.role);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(member_r2.skills);
  }
}
var AboutUsComponent = class _AboutUsComponent {
  teamMembers = [
    {
      name: "Naveen Kumar",
      role: "Frontend Developer",
      skills: "React, Angular, TypeScript",
      image: "animated/aboutus2.gif"
    },
    {
      name: "Venkat Sai",
      role: "Mobile Developer",
      skills: "React Native, Flutter",
      image: "animated/aboutus2.gif"
    },
    {
      name: "Mahesh Babu",
      role: "Cloud Architect",
      skills: "AWS, Docker, Kubernetes",
      image: "animated/aboutus.gif"
    },
    {
      name: "Tanishq",
      role: "UI/UX Designer",
      skills: "Figma, Sketch",
      image: "animated/aboutus.gif"
    },
    {
      name: "Swamy",
      role: "Backend Developer",
      skills: "Node.js, Express",
      image: "animated/aboutus.gif"
    }
  ];
  static \u0275fac = function AboutUsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutUsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], standalone: false, decls: 35, vars: 2, consts: [[1, "about-us-container"], [1, "top-section"], [1, "left-side"], ["src", "about-us.png", "alt", "Web Dev Work", 1, "work-image"], [1, "right-side"], [1, "bottom-section"], [1, "team-cards"], [1, "card-row", "row-2"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card-row", "row-3"], [1, "card"], [1, "profile-img"], [3, "src", "alt"], [1, "card-content"]], template: function AboutUsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      i08.\u0275\u0275element(3, "br")(4, "img", 3);
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(5, "div", 4)(6, "h1");
      i08.\u0275\u0275text(7, "We Are Web Developers");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(8, "p");
      i08.\u0275\u0275text(9, "With 3+ years of experience, we've crafted high-quality web, iOS, and Android apps for over 100 clients. Our team is skilled in React, Angular, TypeScript, JavaScript, React Native, HTML, CSS, and AWS Cloud, building scalable, user-friendly solutions that drive business growth.");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(10, "h3");
      i08.\u0275\u0275text(11, "Technology");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(12, "p");
      i08.\u0275\u0275text(13, "Innovation is at the core of our solutions. We leverage cutting-edge technologies to create seamless digital experiences, from UI/UX design to app development, ensuring your business stays ahead in the ever-evolving digital landscape.");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(14, "ul")(15, "li")(16, "strong");
      i08.\u0275\u0275text(17, "UI/UX Design:");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(18, " Creating intuitive and engaging interfaces.");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(19, "li")(20, "strong");
      i08.\u0275\u0275text(21, "Web & Mobile Development:");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(22, " Expert in React, Angular, React Native, and more.");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(23, "li")(24, "strong");
      i08.\u0275\u0275text(25, "Cloud Infrastructure:");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275text(26, " Scalable, secure solutions powered by AWS Cloud.");
      i08.\u0275\u0275elementEnd()()()();
      i08.\u0275\u0275elementStart(27, "div", 5)(28, "h2");
      i08.\u0275\u0275text(29, "Meet the Team");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(30, "div", 6)(31, "div", 7);
      i08.\u0275\u0275template(32, AboutUsComponent_div_32_Template, 10, 5, "div", 8);
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(33, "div", 9);
      i08.\u0275\u0275template(34, AboutUsComponent_div_34_Template, 10, 5, "div", 8);
      i08.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i08.\u0275\u0275advance(32);
      i08.\u0275\u0275property("ngForOf", ctx.teamMembers.slice(0, 2));
      i08.\u0275\u0275advance(2);
      i08.\u0275\u0275property("ngForOf", ctx.teamMembers.slice(2));
    }
  }, styles: ['\n\n.about-us-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: "Segoe UI", sans-serif;\n  color: #333;\n}\n.top-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 50px;\n}\n.left-side[_ngcontent-%COMP%], \n.right-side[_ngcontent-%COMP%] {\n  flex: 1 1 48%;\n}\n.work-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  object-fit: cover;\n  margin: 0 auto;\n}\n.right-side[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 15px;\n  color: #1d3557;\n}\n.right-side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 12px;\n  line-height: 1.6;\n}\n.bottom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.8rem;\n  margin-bottom: 30px;\n  color: #1d3557;\n}\n.team-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: center;\n}\n.card-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 100%;\n}\n.card[_ngcontent-%COMP%] {\n  background: #eaeaea;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  width: 260px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  transition: none;\n}\n.profile-img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 15px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #ccc;\n}\n.profile-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 6px;\n}\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #555;\n}\n@media (max-width: 768px) {\n  .top-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .left-side[_ngcontent-%COMP%], \n   .right-side[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    padding: 10px;\n  }\n  .card-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .card[_ngcontent-%COMP%] {\n    width: 90%;\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=about-us.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(AboutUsComponent, [{
    type: Component7,
    args: [{ selector: "app-about-us", standalone: false, template: `<div class="about-us-container">
    <!-- Top Section: Image + Text -->
    <div class="top-section">
      <div class="left-side">
        <br>
        <img src="about-us.png" alt="Web Dev Work" class="work-image" />
      </div>
      <div class="right-side">
        <h1>We Are Web Developers</h1>
        <p>With 3+ years of experience, we've crafted high-quality web, iOS, and Android apps for over 100 clients. Our team is skilled in React, Angular, TypeScript, JavaScript, React Native, HTML, CSS, and AWS Cloud, building scalable, user-friendly solutions that drive business growth.</p>
        
        <h3>Technology</h3>
        <p>Innovation is at the core of our solutions. We leverage cutting-edge technologies to create seamless digital experiences, from UI/UX design to app development, ensuring your business stays ahead in the ever-evolving digital landscape.</p>
        
        <ul>
          <li><strong>UI/UX Design:</strong> Creating intuitive and engaging interfaces.</li>
          <li><strong>Web & Mobile Development:</strong> Expert in React, Angular, React Native, and more.</li>
          <li><strong>Cloud Infrastructure:</strong> Scalable, secure solutions powered by AWS Cloud.</li>
        </ul>
      </div>
    </div>
  
    <!-- Bottom Section: Meet the Team -->
    <div class="bottom-section">
      <h2>Meet the Team</h2>
      <div class="team-cards">
        <!-- Row 1: 2 Cards -->
        <div class="card-row row-2">
          <div class="card" *ngFor="let member of teamMembers.slice(0, 2)">
            <div class="profile-img">
              <img [src]="member.image" [alt]="member.name" />
            </div>
            <div class="card-content">
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
              <p>{{ member.skills }}</p>
            </div>
          </div>
        </div>
  
        <!-- Row 2: 3 Cards -->
        <div class="card-row row-3">
          <div class="card" *ngFor="let member of teamMembers.slice(2)">
            <div class="profile-img">
              <img [src]="member.image" [alt]="member.name" />
            </div>
            <div class="card-content">
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
              <p>{{ member.skills }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  `, styles: ['/* src/app/client/about-us/about-us.component.css */\n.about-us-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: "Segoe UI", sans-serif;\n  color: #333;\n}\n.top-section {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 50px;\n}\n.left-side,\n.right-side {\n  flex: 1 1 48%;\n}\n.work-image {\n  width: 100%;\n  max-width: 600px;\n  height: auto;\n  object-fit: cover;\n  margin: 0 auto;\n}\n.right-side h1 {\n  font-size: 2rem;\n  margin-bottom: 15px;\n  color: #1d3557;\n}\n.right-side p {\n  font-size: 1rem;\n  margin-bottom: 12px;\n  line-height: 1.6;\n}\n.bottom-section h2 {\n  text-align: center;\n  font-size: 1.8rem;\n  margin-bottom: 30px;\n  color: #1d3557;\n}\n.team-cards {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  align-items: center;\n}\n.card-row {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: 100%;\n}\n.card {\n  background: #eaeaea;\n  border-radius: 16px;\n  padding: 20px;\n  text-align: center;\n  width: 260px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n  transition: none;\n}\n.profile-img {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 15px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid #ccc;\n}\n.profile-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card-content h3 {\n  font-size: 1.1rem;\n  margin-bottom: 6px;\n}\n.card-content p {\n  font-size: 0.9rem;\n  color: #555;\n}\n@media (max-width: 768px) {\n  .top-section {\n    flex-direction: column;\n  }\n  .left-side,\n  .right-side {\n    flex: 1 1 100%;\n    padding: 10px;\n  }\n  .card-row {\n    flex-direction: column;\n    align-items: center;\n  }\n  .card {\n    width: 90%;\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=about-us.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src/app/client/about-us/about-us.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fabout-us%2Fabout-us.component.ts%40AboutUsComponent";
  function AboutUsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(AboutUsComponent, m.default, [i08], [Component7], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AboutUsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AboutUsComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/carrers/carrers.component.ts
var carrers_component_exports = {};
__export(carrers_component_exports, {
  CarrersComponent: () => CarrersComponent
});
import { Component as Component8 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i09 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
function CarrersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    i09.\u0275\u0275elementStart(0, "div", 9)(1, "h3");
    i09.\u0275\u0275text(2);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(3, "p");
    i09.\u0275\u0275text(4);
    i09.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perk_r1 = ctx.$implicit;
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate(perk_r1.title);
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate(perk_r1.text);
  }
}
function CarrersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = i09.\u0275\u0275getCurrentView();
    i09.\u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3");
    i09.\u0275\u0275text(3);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(4, "span");
    i09.\u0275\u0275text(5);
    i09.\u0275\u0275elementEnd()();
    i09.\u0275\u0275elementStart(6, "p");
    i09.\u0275\u0275text(7);
    i09.\u0275\u0275elementEnd();
    i09.\u0275\u0275elementStart(8, "button", 12);
    i09.\u0275\u0275listener("click", function CarrersComponent_div_16_Template_button_click_8_listener() {
      const job_r3 = i09.\u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = i09.\u0275\u0275nextContext();
      return i09.\u0275\u0275resetView(ctx_r3.apply(job_r3.title));
    });
    i09.\u0275\u0275text(9, "Apply Now");
    i09.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    i09.\u0275\u0275advance(3);
    i09.\u0275\u0275textInterpolate(job_r3.title);
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate(job_r3.type);
    i09.\u0275\u0275advance(2);
    i09.\u0275\u0275textInterpolate(job_r3.description);
  }
}
var CarrersComponent = class _CarrersComponent {
  jobs = [
    {
      title: "Frontend Developer (Angular)",
      type: "Full-time",
      description: "Develop cutting-edge user interfaces using Angular and TypeScript."
    },
    {
      title: "Mobile App Developer (React Native)",
      type: "Full-time",
      description: "Build cross-platform apps for iOS and Android with modern tech."
    },
    {
      title: "Node.js Backend Engineer",
      type: "Contract",
      description: "Design scalable APIs and cloud integrations with Node.js and AWS."
    }
  ];
  reasons = [
    {
      title: "Remote Friendly",
      text: "Work from anywhere with flexible hours and an async culture."
    },
    {
      title: "Growth-Focused",
      text: "We support your professional goals through mentorship and upskilling."
    },
    {
      title: "Real Impact",
      text: "Build meaningful software for businesses across the globe."
    },
    {
      title: "Modern Stack",
      text: "React, Angular, Node.js, AWS \u2014 we work with tools that matter."
    }
  ];
  apply(position) {
    window.open(`mailto:careers@velocityxdev.com?subject=Application for ${position}`);
  }
  static \u0275fac = function CarrersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarrersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _CarrersComponent, selectors: [["app-carrers"]], standalone: false, decls: 17, vars: 2, consts: [[1, "careers-wrapper"], [1, "hero"], [1, "hero-content"], [1, "perks"], [1, "perks-grid"], ["class", "perk-card", 4, "ngFor", "ngForOf"], [1, "openings"], [1, "jobs-grid"], ["class", "job-card", 4, "ngFor", "ngForOf"], [1, "perk-card"], [1, "job-card"], [1, "job-header"], [3, "click"]], template: function CarrersComponent_Template(rf, ctx) {
    if (rf & 1) {
      i09.\u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      i09.\u0275\u0275text(4, "Careers at Velocity Developers");
      i09.\u0275\u0275elementEnd();
      i09.\u0275\u0275elementStart(5, "p");
      i09.\u0275\u0275text(6, "We create beautiful digital products. Want to help us design the future?");
      i09.\u0275\u0275elementEnd()()();
      i09.\u0275\u0275elementStart(7, "section", 3)(8, "h2");
      i09.\u0275\u0275text(9, "Why Work With Us");
      i09.\u0275\u0275elementEnd();
      i09.\u0275\u0275elementStart(10, "div", 4);
      i09.\u0275\u0275template(11, CarrersComponent_div_11_Template, 5, 2, "div", 5);
      i09.\u0275\u0275elementEnd()();
      i09.\u0275\u0275elementStart(12, "section", 6)(13, "h2");
      i09.\u0275\u0275text(14, "Current Openings");
      i09.\u0275\u0275elementEnd();
      i09.\u0275\u0275elementStart(15, "div", 7);
      i09.\u0275\u0275template(16, CarrersComponent_div_16_Template, 10, 3, "div", 8);
      i09.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i09.\u0275\u0275advance(11);
      i09.\u0275\u0275property("ngForOf", ctx.reasons);
      i09.\u0275\u0275advance(5);
      i09.\u0275\u0275property("ngForOf", ctx.jobs);
    }
  }, styles: ['\n\n[_ngcontent-%COMP%]:root {\n  --bg: #eaeaea;\n  --card-bg: #ffffff;\n  --primary: #2a0467;\n  --accent: #f6f9fc;\n  --hover: #e3f2fd;\n  --text-dark: #212121;\n  --text-muted: #6e6e6e;\n  --radius: 1rem;\n  --shadow: 0 12px 24px rgba(0, 0, 0, 0.05);\n  --font: "Inter", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: var(--bg);\n  font-family: var(--font);\n  color: var(--text-dark);\n  margin: 0;\n  padding: 0;\n}\n.careers-wrapper[_ngcontent-%COMP%] {\n  padding: 4rem 1rem;\n  max-width: 1200px;\n  margin: auto;\n}\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 1rem;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.2rem;\n  max-width: 600px;\n  margin: auto;\n}\n.perks[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.openings[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  color: var(--primary);\n}\n.perks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n@media (min-width: 1024px) {\n  .perks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.perk-card[_ngcontent-%COMP%] {\n  background: var(--accent);\n  padding: 1.5rem;\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  transition: all 0.3s ease;\n}\n.perk-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  background-color: var(--hover);\n}\n.perk-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n.perk-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n}\n.jobs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.job-card[_ngcontent-%COMP%] {\n  background: var(--card-bg);\n  padding: 1.5rem;\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  display: flex;\n  flex-direction: column;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.job-card[_ngcontent-%COMP%]:hover {\n  background-color: var(--hover);\n  transform: translateY(-4px);\n}\n.job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.job-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.3rem 0.8rem;\n  border-radius: 999px;\n}\n.job-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  margin: 0;\n  color: var(--text-dark);\n}\n.job-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1rem;\n  margin: 1rem 0;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.4rem;\n  background-color: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #0051c4;\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .perk-card[_ngcontent-%COMP%], \n   .job-card[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 1.2rem;\n  }\n  .job-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  button[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .careers-wrapper[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n/*# sourceMappingURL=carrers.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(CarrersComponent, [{
    type: Component8,
    args: [{ selector: "app-carrers", standalone: false, template: '<div class="careers-wrapper">\n    <section class="hero">\n      <div class="hero-content">\n        <h1>Careers at Velocity Developers</h1>\n        <p>We create beautiful digital products. Want to help us design the future?</p>\n      </div>\n    </section>\n  \n    <section class="perks">\n      <h2>Why Work With Us</h2>\n      <div class="perks-grid">\n        <div class="perk-card" *ngFor="let perk of reasons">\n          <h3>{{ perk.title }}</h3>\n          <p>{{ perk.text }}</p>\n        </div>\n      </div>\n    </section>\n  \n    <section class="openings">\n      <h2>Current Openings</h2>\n      <div class="jobs-grid">\n        <div class="job-card" *ngFor="let job of jobs">\n          <div class="job-header">\n            <h3>{{ job.title }}</h3>\n            <span>{{ job.type }}</span>\n          </div>\n          <p>{{ job.description }}</p>\n          <button (click)="apply(job.title)">Apply Now</button>\n        </div>\n      </div>\n    </section>\n  </div>\n  ', styles: ['/* src/app/client/carrers/carrers.component.css */\n:root {\n  --bg: #eaeaea;\n  --card-bg: #ffffff;\n  --primary: #2a0467;\n  --accent: #f6f9fc;\n  --hover: #e3f2fd;\n  --text-dark: #212121;\n  --text-muted: #6e6e6e;\n  --radius: 1rem;\n  --shadow: 0 12px 24px rgba(0, 0, 0, 0.05);\n  --font: "Inter", sans-serif;\n}\nbody {\n  background-color: var(--bg);\n  font-family: var(--font);\n  color: var(--text-dark);\n  margin: 0;\n  padding: 0;\n}\n.careers-wrapper {\n  padding: 4rem 1rem;\n  max-width: 1200px;\n  margin: auto;\n}\n.hero {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.hero-content h1 {\n  font-size: 2.8rem;\n  font-weight: 700;\n  color: var(--primary);\n  margin-bottom: 1rem;\n}\n.hero-content p {\n  color: var(--text-muted);\n  font-size: 1.2rem;\n  max-width: 600px;\n  margin: auto;\n}\n.perks h2,\n.openings h2 {\n  text-align: center;\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  color: var(--primary);\n}\n.perks-grid {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n@media (min-width: 1024px) {\n  .perks-grid {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n.perk-card {\n  background: var(--accent);\n  padding: 1.5rem;\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  transition: all 0.3s ease;\n}\n.perk-card:hover {\n  transform: translateY(-6px);\n  background-color: var(--hover);\n}\n.perk-card h3 {\n  color: var(--primary);\n  font-size: 1.1rem;\n  margin-bottom: 0.5rem;\n}\n.perk-card p {\n  font-size: 0.95rem;\n  color: var(--text-muted);\n}\n.jobs-grid {\n  display: grid;\n  gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.job-card {\n  background: var(--card-bg);\n  padding: 1.5rem;\n  border-radius: var(--radius);\n  box-shadow: var(--shadow);\n  display: flex;\n  flex-direction: column;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n}\n.job-card:hover {\n  background-color: var(--hover);\n  transform: translateY(-4px);\n}\n.job-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.job-header span {\n  background-color: var(--primary);\n  color: white;\n  font-size: 0.75rem;\n  padding: 0.3rem 0.8rem;\n  border-radius: 999px;\n}\n.job-card h3 {\n  font-size: 1.4rem;\n  margin: 0;\n  color: var(--text-dark);\n}\n.job-card p {\n  color: var(--text-muted);\n  font-size: 1rem;\n  margin: 1rem 0;\n}\nbutton {\n  padding: 0.6rem 1.4rem;\n  background-color: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\nbutton:hover {\n  background-color: #0051c4;\n}\n@media (max-width: 768px) {\n  .hero-content h1 {\n    font-size: 2.2rem;\n  }\n  .hero-content p {\n    font-size: 1rem;\n  }\n  .perk-card,\n  .job-card {\n    text-align: center;\n    padding: 1.2rem;\n  }\n  .job-header {\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  button {\n    width: 100%;\n    font-size: 1rem;\n  }\n}\n@media (max-width: 480px) {\n  .hero-content h1 {\n    font-size: 1.8rem;\n  }\n  .hero-content p {\n    font-size: 0.95rem;\n  }\n  .careers-wrapper {\n    padding: 2rem 1rem;\n  }\n}\n/*# sourceMappingURL=carrers.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(CarrersComponent, { className: "CarrersComponent", filePath: "src/app/client/carrers/carrers.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fcarrers%2Fcarrers.component.ts%40CarrersComponent";
  function CarrersComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i09.\u0275\u0275replaceMetadata(CarrersComponent, m.default, [i09], [Component8], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && CarrersComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && CarrersComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/static/adrioddevelopment/adrioddevelopment.component.ts
var adrioddevelopment_component_exports = {};
__export(adrioddevelopment_component_exports, {
  AdrioddevelopmentComponent: () => AdrioddevelopmentComponent
});
import { Component as Component9 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i010 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var AdrioddevelopmentComponent = class _AdrioddevelopmentComponent {
  static \u0275fac = function AdrioddevelopmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdrioddevelopmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i010.\u0275\u0275defineComponent({ type: _AdrioddevelopmentComponent, selectors: [["app-adrioddevelopment"]], standalone: false, decls: 27, vars: 0, consts: [[1, "card-container"], [1, "section-card"], [1, "intro"]], template: function AdrioddevelopmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      i010.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      i010.\u0275\u0275text(3, "Android & iOS App Development");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275elementStart(4, "p", 2);
      i010.\u0275\u0275text(5, " We deliver cutting-edge mobile applications tailored to your business goals \u2014 combining speed, performance, and sleek UI. ");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275elementStart(6, "ul")(7, "li")(8, "strong");
      i010.\u0275\u0275text(9, "Cross-Platform Builds:");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275text(10, " One codebase for both Android and iOS.");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275elementStart(11, "li")(12, "strong");
      i010.\u0275\u0275text(13, "Native Experience:");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275text(14, " Optimized for fast response & low battery usage.");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275elementStart(15, "li")(16, "strong");
      i010.\u0275\u0275text(17, "App Store Launch:");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275text(18, " Complete support for publishing & compliance.");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275elementStart(19, "li")(20, "strong");
      i010.\u0275\u0275text(21, "Push Notifications:");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275text(22, " Real-time user engagement systems.");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275elementStart(23, "li")(24, "strong");
      i010.\u0275\u0275text(25, "Secure Auth & APIs:");
      i010.\u0275\u0275elementEnd();
      i010.\u0275\u0275text(26, " Safe login, payment, and backend connections.");
      i010.\u0275\u0275elementEnd()()()();
    }
  }, styles: ["\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n  border-radius: 20px;\n  padding: 30px;\n  max-width: 900px;\n  width: 100%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 25px rgba(94, 23, 235, 0.2);\n}\n.section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #5e17eb;\n  font-size: 28px;\n  margin-bottom: 20px;\n}\n.section-card[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333;\n}\n.section-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n  padding-left: 20px;\n}\n.section-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #444;\n}\n@media (max-width: 768px) {\n  .section-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .section-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=adrioddevelopment.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassMetadata(AdrioddevelopmentComponent, [{
    type: Component9,
    args: [{ selector: "app-adrioddevelopment", standalone: false, template: '<div class="card-container">\n  <div class="section-card">\n    <h2>Android & iOS App Development</h2>\n    <p class="intro">\n      We deliver cutting-edge mobile applications tailored to your business goals \u2014 combining speed, performance, and sleek UI.\n    </p>\n    <ul>\n      <li><strong>Cross-Platform Builds:</strong> One codebase for both Android and iOS.</li>\n      <li><strong>Native Experience:</strong> Optimized for fast response & low battery usage.</li>\n      <li><strong>App Store Launch:</strong> Complete support for publishing & compliance.</li>\n      <li><strong>Push Notifications:</strong> Real-time user engagement systems.</li>\n      <li><strong>Secure Auth & APIs:</strong> Safe login, payment, and backend connections.</li>\n    </ul>\n  </div>\n</div>\n', styles: ["/* src/app/client/static/adrioddevelopment/adrioddevelopment.component.css */\n.card-container {\n  display: flex;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.section-card {\n  background-color: #eaeaea;\n  border-radius: 20px;\n  padding: 30px;\n  max-width: 900px;\n  width: 100%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-card:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 25px rgba(94, 23, 235, 0.2);\n}\n.section-card h2 {\n  color: #5e17eb;\n  font-size: 28px;\n  margin-bottom: 20px;\n}\n.section-card .intro {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333;\n}\n.section-card ul {\n  list-style: disc;\n  padding-left: 20px;\n}\n.section-card li {\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #444;\n}\n@media (max-width: 768px) {\n  .section-card {\n    padding: 20px;\n  }\n  .section-card h2 {\n    font-size: 22px;\n  }\n  .section-card li {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=adrioddevelopment.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i010.\u0275setClassDebugInfo(AdrioddevelopmentComponent, { className: "AdrioddevelopmentComponent", filePath: "src/app/client/static/adrioddevelopment/adrioddevelopment.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fstatic%2Fadrioddevelopment%2Fadrioddevelopment.component.ts%40AdrioddevelopmentComponent";
  function AdrioddevelopmentComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i010.\u0275\u0275replaceMetadata(AdrioddevelopmentComponent, m.default, [i010], [Component9], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AdrioddevelopmentComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AdrioddevelopmentComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/static/seo/seo.component.ts
var seo_component_exports = {};
__export(seo_component_exports, {
  SeoComponent: () => SeoComponent
});
import { Component as Component10 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i011 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var SeoComponent = class _SeoComponent {
  static \u0275fac = function SeoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SeoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i011.\u0275\u0275defineComponent({ type: _SeoComponent, selectors: [["app-seo"]], standalone: false, decls: 27, vars: 0, consts: [[1, "card-container"], [1, "section-card"], [1, "intro"]], template: function SeoComponent_Template(rf, ctx) {
    if (rf & 1) {
      i011.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      i011.\u0275\u0275text(3, "SEO & Performance Optimization");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(4, "p", 2);
      i011.\u0275\u0275text(5, " Our SEO experts help you rank higher, load faster, and convert better. Grow your audience with real results. ");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(6, "ul")(7, "li")(8, "strong");
      i011.\u0275\u0275text(9, "On-Page SEO:");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275text(10, " Meta tags, structured data, and content audit.");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(11, "li")(12, "strong");
      i011.\u0275\u0275text(13, "Technical SEO:");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275text(14, " Speed, security, and mobile responsiveness fixes.");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(15, "li")(16, "strong");
      i011.\u0275\u0275text(17, "Keyword Research:");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275text(18, " Strategic targeting to attract quality leads.");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(19, "li")(20, "strong");
      i011.\u0275\u0275text(21, "Backlink Strategy:");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275text(22, " High-authority link building techniques.");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275elementStart(23, "li")(24, "strong");
      i011.\u0275\u0275text(25, "Analytics Integration:");
      i011.\u0275\u0275elementEnd();
      i011.\u0275\u0275text(26, " Measurable performance insights & KPIs.");
      i011.\u0275\u0275elementEnd()()()();
    }
  }, styles: ["\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n  border-radius: 20px;\n  padding: 30px;\n  max-width: 900px;\n  width: 100%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 25px rgba(94, 23, 235, 0.2);\n}\n.section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #5e17eb;\n  font-size: 28px;\n  margin-bottom: 20px;\n}\n.section-card[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333;\n}\n.section-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n  padding-left: 20px;\n}\n.section-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #444;\n}\n@media (max-width: 768px) {\n  .section-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .section-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=seo.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassMetadata(SeoComponent, [{
    type: Component10,
    args: [{ selector: "app-seo", standalone: false, template: '<div class="card-container">\n  <div class="section-card">\n    <h2>SEO & Performance Optimization</h2>\n    <p class="intro">\n      Our SEO experts help you rank higher, load faster, and convert better. Grow your audience with real results.\n    </p>\n    <ul>\n      <li><strong>On-Page SEO:</strong> Meta tags, structured data, and content audit.</li>\n      <li><strong>Technical SEO:</strong> Speed, security, and mobile responsiveness fixes.</li>\n      <li><strong>Keyword Research:</strong> Strategic targeting to attract quality leads.</li>\n      <li><strong>Backlink Strategy:</strong> High-authority link building techniques.</li>\n      <li><strong>Analytics Integration:</strong> Measurable performance insights & KPIs.</li>\n    </ul>\n  </div>\n</div>\n', styles: ["/* src/app/client/static/seo/seo.component.css */\n.card-container {\n  display: flex;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.section-card {\n  background-color: #eaeaea;\n  border-radius: 20px;\n  padding: 30px;\n  max-width: 900px;\n  width: 100%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-card:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 25px rgba(94, 23, 235, 0.2);\n}\n.section-card h2 {\n  color: #5e17eb;\n  font-size: 28px;\n  margin-bottom: 20px;\n}\n.section-card .intro {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333;\n}\n.section-card ul {\n  list-style: disc;\n  padding-left: 20px;\n}\n.section-card li {\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #444;\n}\n@media (max-width: 768px) {\n  .section-card {\n    padding: 20px;\n  }\n  .section-card h2 {\n    font-size: 22px;\n  }\n  .section-card li {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=seo.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i011.\u0275setClassDebugInfo(SeoComponent, { className: "SeoComponent", filePath: "src/app/client/static/seo/seo.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fstatic%2Fseo%2Fseo.component.ts%40SeoComponent";
  function SeoComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i011.\u0275\u0275replaceMetadata(SeoComponent, m.default, [i011], [Component10], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && SeoComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SeoComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/upcomingprojects/upcomingprojects.component.ts
var upcomingprojects_component_exports = {};
__export(upcomingprojects_component_exports, {
  UpcomingprojectsComponent: () => UpcomingprojectsComponent
});
import { Component as Component11 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i012 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
function UpcomingprojectsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i012.\u0275\u0275elementStart(0, "div", 2);
    i012.\u0275\u0275element(1, "img", 3);
    i012.\u0275\u0275elementStart(2, "div", 4)(3, "h3");
    i012.\u0275\u0275text(4);
    i012.\u0275\u0275elementEnd();
    i012.\u0275\u0275elementStart(5, "p");
    i012.\u0275\u0275text(6);
    i012.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i012.\u0275\u0275advance();
    i012.\u0275\u0275property("src", item_r1.image, i012.\u0275\u0275sanitizeUrl);
    i012.\u0275\u0275advance(3);
    i012.\u0275\u0275textInterpolate(item_r1.title);
    i012.\u0275\u0275advance(2);
    i012.\u0275\u0275textInterpolate(item_r1.description);
  }
}
var UpcomingprojectsComponent = class _UpcomingprojectsComponent {
  staticData = [
    {
      title: "Web Development Platform",
      description: [
        "\u{1F9F1} Modular and component-driven design system",
        "\u26A1 Built with Angular, Node.js, and MongoDB",
        "\u{1F6E0}\uFE0F Designed for performance and easy scaling"
      ],
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Android App Suite",
      description: [
        "\u{1F4F1} A suite of productivity apps for professionals",
        "\u{1F3A8} Beautiful, clean UI with intuitive navigation",
        "\u{1F4E4} Cloud sync, offline support, and push notifications"
      ],
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "AI-Powered Dashboard",
      description: [
        "\u{1F916} Real-time analytics powered by AI",
        "\u{1F4CA} Customizable dashboards and reports",
        "\u{1F510} Secure user access and role management"
      ],
      image: "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=800&q=80"
    }
  ];
  dynamicData = [];
  static \u0275fac = function UpcomingprojectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpcomingprojectsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i012.\u0275\u0275defineComponent({ type: _UpcomingprojectsComponent, selectors: [["app-upcomingprojects"]], standalone: false, decls: 2, vars: 1, consts: [[1, "card-container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["alt", "Card image", 1, "card-image", 3, "src"], [1, "card-content"]], template: function UpcomingprojectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i012.\u0275\u0275elementStart(0, "div", 0);
      i012.\u0275\u0275template(1, UpcomingprojectsComponent_div_1_Template, 7, 3, "div", 1);
      i012.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i012.\u0275\u0275advance();
      i012.\u0275\u0275property("ngForOf", ctx.staticData.concat(ctx.dynamicData));
    }
  }, styles: ['\n\n.card-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  .card-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.card[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border: 2px solid #ffc107;\n  border-radius: 16px;\n  overflow: hidden;\n  transform: scale(1);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.card-content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.card-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.card-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1.2rem;\n  margin: 0.5rem 0 0 0;\n}\n.card-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n  list-style: none;\n  position: relative;\n  padding-left: 1.2rem;\n}\n.card-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2022";\n  color: #ffc107;\n  font-weight: bold;\n  position: absolute;\n  left: 0;\n}\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n/*# sourceMappingURL=upcomingprojects.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassMetadata(UpcomingprojectsComponent, [{
    type: Component11,
    args: [{ selector: "app-upcomingprojects", standalone: false, template: '<div class="card-container">\n  <div class="card" *ngFor="let item of staticData.concat(dynamicData)">\n    <img [src]="item.image" alt="Card image" class="card-image" />\n    <div class="card-content">\n      <h3>{{ item.title }}</h3>\n      <p>{{ item.description }}</p>\n    </div>\n  </div>\n</div>\n', styles: ['/* src/app/client/upcomingprojects/upcomingprojects.component.css */\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n  padding: 1rem;\n}\n@media (max-width: 768px) {\n  .card-container {\n    grid-template-columns: 1fr;\n  }\n}\n.card {\n  background-color: #d4edda;\n  border: 2px solid #ffc107;\n  border-radius: 16px;\n  overflow: hidden;\n  transform: scale(1);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  cursor: pointer;\n}\n.card:hover {\n  transform: scale(1.05);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.card-image {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n.card:hover .card-image {\n  transform: scale(1.1);\n}\n.card-content {\n  padding: 1rem;\n}\n.card-content h3 {\n  margin: 0 0 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.card-content ul {\n  padding-left: 1.2rem;\n  margin: 0.5rem 0 0 0;\n}\n.card-content li {\n  margin-bottom: 0.4rem;\n  list-style: none;\n  position: relative;\n  padding-left: 1.2rem;\n}\n.card-content li::before {\n  content: "\\2022";\n  color: #ffc107;\n  font-weight: bold;\n  position: absolute;\n  left: 0;\n}\n.card-content p {\n  margin: 0;\n  color: #333;\n}\n/*# sourceMappingURL=upcomingprojects.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i012.\u0275setClassDebugInfo(UpcomingprojectsComponent, { className: "UpcomingprojectsComponent", filePath: "src/app/client/upcomingprojects/upcomingprojects.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fupcomingprojects%2Fupcomingprojects.component.ts%40UpcomingprojectsComponent";
  function UpcomingprojectsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i012.\u0275\u0275replaceMetadata(UpcomingprojectsComponent, m.default, [i012], [Component11], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && UpcomingprojectsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && UpcomingprojectsComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/static/termsandconditions/termsandconditions.component.ts
var termsandconditions_component_exports = {};
__export(termsandconditions_component_exports, {
  TermsandconditionsComponent: () => TermsandconditionsComponent
});
import { Component as Component12 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i013 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var TermsandconditionsComponent = class _TermsandconditionsComponent {
  static \u0275fac = function TermsandconditionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TermsandconditionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i013.\u0275\u0275defineComponent({ type: _TermsandconditionsComponent, selectors: [["app-termsandconditions"]], standalone: false, decls: 50, vars: 0, consts: [[1, "terms-container"], ["href", "mailto:team@velocityxdev.com"]], template: function TermsandconditionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i013.\u0275\u0275elementStart(0, "div", 0)(1, "section")(2, "h1");
      i013.\u0275\u0275text(3, "Terms & Conditions");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(4, "p");
      i013.\u0275\u0275text(5, " Welcome to our services. By accessing or using our website, mobile apps, or other digital services, you agree to be bound by these Terms & Conditions. If you disagree with any part of the terms, please do not use our services. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(6, "h2");
      i013.\u0275\u0275text(7, "1. Services");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(8, "p");
      i013.\u0275\u0275text(9, " We design and develop web, iOS, Android, and cross-platform applications. By using our services, you acknowledge that our solutions may include third-party integrations or require platform-specific permissions. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(10, "h2");
      i013.\u0275\u0275text(11, "2. Intellectual Property");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(12, "p");
      i013.\u0275\u0275text(13, " All content, code, and materials developed by us remain our intellectual property unless otherwise agreed in a written contract. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(14, "h2");
      i013.\u0275\u0275text(15, "3. Payment & Billing");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(16, "p");
      i013.\u0275\u0275text(17, " Payment terms are discussed and agreed upon before project initiation. Late payments may incur additional charges. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(18, "h2");
      i013.\u0275\u0275text(19, "4. Limitation of Liability");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(20, "p");
      i013.\u0275\u0275text(21, " We are not liable for any indirect, incidental, or consequential damages arising from the use of our applications or services. ");
      i013.\u0275\u0275elementEnd()();
      i013.\u0275\u0275elementStart(22, "section")(23, "h1");
      i013.\u0275\u0275text(24, "Privacy Policy");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(25, "p");
      i013.\u0275\u0275text(26, " We value your privacy. This policy explains how we collect, use, and protect your personal information. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(27, "h2");
      i013.\u0275\u0275text(28, "1. Data Collection");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(29, "p");
      i013.\u0275\u0275text(30, " We may collect user data such as names, emails, device information, or usage statistics to improve service quality. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(31, "h2");
      i013.\u0275\u0275text(32, "2. Use of Information");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(33, "p");
      i013.\u0275\u0275text(34, " Your data helps us personalize your experience, enhance app performance, and provide support. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(35, "h2");
      i013.\u0275\u0275text(36, "3. Third-party Services");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(37, "p");
      i013.\u0275\u0275text(38, " We may use trusted third-party tools (e.g., analytics, payment gateways). Their use of your data is governed by their policies. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(39, "h2");
      i013.\u0275\u0275text(40, "4. Data Security");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(41, "p");
      i013.\u0275\u0275text(42, " We implement strong security measures to protect your information from unauthorized access. ");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(43, "h2");
      i013.\u0275\u0275text(44, "5. Contact");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275elementStart(45, "p");
      i013.\u0275\u0275text(46, " For questions about these policies, contact us at ");
      i013.\u0275\u0275elementStart(47, "a", 1);
      i013.\u0275\u0275text(48, "teamvelocityxdec.com");
      i013.\u0275\u0275elementEnd();
      i013.\u0275\u0275text(49, ". ");
      i013.\u0275\u0275elementEnd()()();
    }
  }, styles: ["\n\n.terms-container[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 1rem;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);\n}\n.terms-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  color: #5e17eb;\n}\n.terms-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-top: 1.5rem;\n  color: #333;\n}\n.terms-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0.5rem 0;\n  line-height: 1.6;\n  color: #444;\n}\n.terms-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #5e17eb;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .terms-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .terms-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .terms-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .terms-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=termsandconditions.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassMetadata(TermsandconditionsComponent, [{
    type: Component12,
    args: [{ selector: "app-termsandconditions", standalone: false, template: '<div class="terms-container">\n  <section>\n    <h1>Terms & Conditions</h1>\n    <p>\n      Welcome to our services. By accessing or using our website, mobile apps, or other digital services,\n      you agree to be bound by these Terms & Conditions. If you disagree with any part of the terms, please do not use our services.\n    </p>\n    <h2>1. Services</h2>\n    <p>\n      We design and develop web, iOS, Android, and cross-platform applications. By using our services, you acknowledge that our\n      solutions may include third-party integrations or require platform-specific permissions.\n    </p>\n    <h2>2. Intellectual Property</h2>\n    <p>\n      All content, code, and materials developed by us remain our intellectual property unless otherwise agreed in a written contract.\n    </p>\n    <h2>3. Payment & Billing</h2>\n    <p>\n      Payment terms are discussed and agreed upon before project initiation. Late payments may incur additional charges.\n    </p>\n    <h2>4. Limitation of Liability</h2>\n    <p>\n      We are not liable for any indirect, incidental, or consequential damages arising from the use of our applications or services.\n    </p>\n  </section>\n\n  <section>\n    <h1>Privacy Policy</h1>\n    <p>\n      We value your privacy. This policy explains how we collect, use, and protect your personal information.\n    </p>\n    <h2>1. Data Collection</h2>\n    <p>\n      We may collect user data such as names, emails, device information, or usage statistics to improve service quality.\n    </p>\n    <h2>2. Use of Information</h2>\n    <p>\n      Your data helps us personalize your experience, enhance app performance, and provide support.\n    </p>\n    <h2>3. Third-party Services</h2>\n    <p>\n      We may use trusted third-party tools (e.g., analytics, payment gateways). Their use of your data is governed by their policies.\n    </p>\n    <h2>4. Data Security</h2>\n    <p>\n      We implement strong security measures to protect your information from unauthorized access.\n    </p>\n    <h2>5. Contact</h2>\n    <p>\n      For questions about these policies, contact us at <a href="mailto:team@velocityxdev.com">teamvelocityxdec.com</a>.\n    </p>\n  </section>\n</div>\n', styles: ["/* src/app/client/static/termsandconditions/termsandconditions.component.css */\n.terms-container {\n  max-width: 900px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background: #ffffff;\n  border-radius: 1rem;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);\n}\n.terms-container h1 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  color: #5e17eb;\n}\n.terms-container h2 {\n  font-size: 1.25rem;\n  margin-top: 1.5rem;\n  color: #333;\n}\n.terms-container p {\n  font-size: 1rem;\n  margin: 0.5rem 0;\n  line-height: 1.6;\n  color: #444;\n}\n.terms-container a {\n  color: #5e17eb;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .terms-container {\n    padding: 1rem;\n  }\n  .terms-container h1 {\n    font-size: 1.5rem;\n  }\n  .terms-container h2 {\n    font-size: 1.1rem;\n  }\n  .terms-container p {\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=termsandconditions.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i013.\u0275setClassDebugInfo(TermsandconditionsComponent, { className: "TermsandconditionsComponent", filePath: "src/app/client/static/termsandconditions/termsandconditions.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fstatic%2Ftermsandconditions%2Ftermsandconditions.component.ts%40TermsandconditionsComponent";
  function TermsandconditionsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i013.\u0275\u0275replaceMetadata(TermsandconditionsComponent, m.default, [i013], [Component12], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && TermsandconditionsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && TermsandconditionsComponent_HmrLoad(d.timestamp)));
})();

// src/app/admin/upcomingproject/upcomingproject.component.ts
var upcomingproject_component_exports = {};
__export(upcomingproject_component_exports, {
  UpcomingprojectComponent: () => UpcomingprojectComponent
});
import { Component as Component13 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i014 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var UpcomingprojectComponent = class _UpcomingprojectComponent {
  static \u0275fac = function UpcomingprojectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpcomingprojectComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i014.\u0275\u0275defineComponent({ type: _UpcomingprojectComponent, selectors: [["app-upcomingproject"]], standalone: false, decls: 2, vars: 0, template: function UpcomingprojectComponent_Template(rf, ctx) {
    if (rf & 1) {
      i014.\u0275\u0275elementStart(0, "p");
      i014.\u0275\u0275text(1, "upcomingproject works!");
      i014.\u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassMetadata(UpcomingprojectComponent, [{
    type: Component13,
    args: [{ selector: "app-upcomingproject", standalone: false, template: "<p>upcomingproject works!</p>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i014.\u0275setClassDebugInfo(UpcomingprojectComponent, { className: "UpcomingprojectComponent", filePath: "src/app/admin/upcomingproject/upcomingproject.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fadmin%2Fupcomingproject%2Fupcomingproject.component.ts%40UpcomingprojectComponent";
  function UpcomingprojectComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i014.\u0275\u0275replaceMetadata(UpcomingprojectComponent, m.default, [i014], [Component13], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && UpcomingprojectComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && UpcomingprojectComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/static/blogs/blogs.component.ts
var blogs_component_exports = {};
__export(blogs_component_exports, {
  BlogsComponent: () => BlogsComponent
});
import { Component as Component14 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i015 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var _c02 = (a0) => ["/blog", a0];
function BlogsComponent_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    i015.\u0275\u0275elementStart(0, "span", 8);
    i015.\u0275\u0275text(1);
    i015.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    i015.\u0275\u0275advance();
    i015.\u0275\u0275textInterpolate(tag_r1);
  }
}
function BlogsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    i015.\u0275\u0275elementStart(0, "div", 2)(1, "h2");
    i015.\u0275\u0275text(2);
    i015.\u0275\u0275elementEnd();
    i015.\u0275\u0275elementStart(3, "p", 3);
    i015.\u0275\u0275text(4);
    i015.\u0275\u0275elementEnd();
    i015.\u0275\u0275elementStart(5, "p", 4);
    i015.\u0275\u0275text(6);
    i015.\u0275\u0275elementEnd();
    i015.\u0275\u0275elementStart(7, "div", 5);
    i015.\u0275\u0275template(8, BlogsComponent_div_1_span_8_Template, 2, 1, "span", 6);
    i015.\u0275\u0275elementEnd();
    i015.\u0275\u0275elementStart(9, "a", 7);
    i015.\u0275\u0275text(10, "Read More");
    i015.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    i015.\u0275\u0275advance(2);
    i015.\u0275\u0275textInterpolate(post_r2.title);
    i015.\u0275\u0275advance(2);
    i015.\u0275\u0275textInterpolate2("", post_r2.date, " \u2014 ", post_r2.author, "");
    i015.\u0275\u0275advance(2);
    i015.\u0275\u0275textInterpolate(post_r2.summary);
    i015.\u0275\u0275advance(2);
    i015.\u0275\u0275property("ngForOf", post_r2.tags);
    i015.\u0275\u0275advance();
    i015.\u0275\u0275property("routerLink", i015.\u0275\u0275pureFunction1(6, _c02, post_r2.slug));
  }
}
var BlogsComponent = class _BlogsComponent {
  blogPosts = [
    {
      id: 1,
      title: "Why Your Business Needs a Mobile App in 2025",
      slug: "mobile-app-2025-benefits",
      summary: "Mobile apps boost engagement, improve customer experience, and unlock new revenue streams.",
      content: `In 2025, having a mobile app is essential. Businesses leveraging native and cross-platform apps see better performance, stronger customer loyalty, and easier scalability.`,
      author: "Jane Doe",
      date: "2025-05-10",
      tags: ["Mobile", "Business"]
    },
    {
      id: 2,
      title: "Top 5 UI/UX Trends in 2025",
      slug: "top-ui-ux-trends-2025",
      summary: "Discover the design trends shaping digital products this year, from personalization to accessibility.",
      content: `User experience is evolving quickly. Prioritize simplicity, motion design, dark mode, and inclusive interfaces for better results.`,
      author: "John Smith",
      date: "2025-04-28",
      tags: ["Design", "UI/UX"]
    },
    {
      id: 3,
      title: "The Full-Stack Advantage",
      slug: "full-stack-development-benefits",
      summary: "Why full-stack teams deliver faster and more reliably in modern development projects.",
      content: `Full-stack development reduces friction between frontend and backend. It enables agile workflows, faster deployment, and consistent architecture.`,
      author: "Ayesha Khan",
      date: "2025-04-15",
      tags: ["Development", "Full-Stack"]
    }
  ];
  static \u0275fac = function BlogsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i015.\u0275\u0275defineComponent({ type: _BlogsComponent, selectors: [["app-blogs"]], standalone: false, decls: 2, vars: 1, consts: [[1, "blog-container"], ["class", "blog-card", 4, "ngFor", "ngForOf"], [1, "blog-card"], [1, "meta"], [1, "summary"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "read-more", 3, "routerLink"], [1, "tag"]], template: function BlogsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i015.\u0275\u0275elementStart(0, "div", 0);
      i015.\u0275\u0275template(1, BlogsComponent_div_1_Template, 11, 8, "div", 1);
      i015.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i015.\u0275\u0275advance();
      i015.\u0275\u0275property("ngForOf", ctx.blogPosts);
    }
  }, styles: ["\n\n.blog-container[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  grid-template-columns: 1fr;\n  max-width: 900px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .blog-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 1024px) {\n  .blog-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n.blog-card[_ngcontent-%COMP%] {\n  background: #f9f9f9;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);\n}\n.blog-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  color: #5e17eb;\n}\n.blog-card[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  margin-bottom: 0.75rem;\n}\n.blog-card[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin-bottom: 0.75rem;\n}\n.blog-card[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.blog-card[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background: #5e17eb;\n  color: white;\n  padding: 0.2rem 0.6rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  margin-right: 0.3rem;\n}\n.blog-card[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #5e17eb;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=blogs.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassMetadata(BlogsComponent, [{
    type: Component14,
    args: [{ selector: "app-blogs", standalone: false, template: `<div class="blog-container">
  <div *ngFor="let post of blogPosts" class="blog-card">
    <h2>{{ post.title }}</h2>
    <p class="meta">{{ post.date }} \u2014 {{ post.author }}</p>
    <p class="summary">{{ post.summary }}</p>
    <div class="tags">
      <span *ngFor="let tag of post.tags" class="tag">{{ tag }}</span>
    </div>
    <a [routerLink]="['/blog', post.slug]" class="read-more">Read More</a>
  </div>
</div>
`, styles: ["/* src/app/client/static/blogs/blogs.component.css */\n.blog-container {\n  display: grid;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  grid-template-columns: 1fr;\n  max-width: 900px;\n  margin: 0 auto;\n}\n@media (min-width: 768px) {\n  .blog-container {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (min-width: 1024px) {\n  .blog-container {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n.blog-card {\n  background: #f9f9f9;\n  padding: 1.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);\n}\n.blog-card h2 {\n  font-size: 1.2rem;\n  margin-bottom: 0.5rem;\n  color: #5e17eb;\n}\n.blog-card .meta {\n  font-size: 0.85rem;\n  color: #666;\n  margin-bottom: 0.75rem;\n}\n.blog-card .summary {\n  font-size: 0.95rem;\n  margin-bottom: 0.75rem;\n}\n.blog-card .tags {\n  margin-bottom: 0.5rem;\n}\n.blog-card .tags .tag {\n  background: #5e17eb;\n  color: white;\n  padding: 0.2rem 0.6rem;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  margin-right: 0.3rem;\n}\n.blog-card .read-more {\n  font-weight: bold;\n  color: #5e17eb;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=blogs.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i015.\u0275setClassDebugInfo(BlogsComponent, { className: "BlogsComponent", filePath: "src/app/client/static/blogs/blogs.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fstatic%2Fblogs%2Fblogs.component.ts%40BlogsComponent";
  function BlogsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i015.\u0275\u0275replaceMetadata(BlogsComponent, m.default, [i015], [Component14], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && BlogsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && BlogsComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/home/home.component.ts
function HomeComponent_div_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementContainerStart(0);
    i016.\u0275\u0275text(1, "Name is required.");
    i016.\u0275\u0275elementContainerEnd();
  }
}
function HomeComponent_div_21_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementContainerStart(0);
    i016.\u0275\u0275text(1, "Name must be at least 2 characters.");
    i016.\u0275\u0275elementContainerEnd();
  }
}
function HomeComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "div", 28);
    i016.\u0275\u0275template(1, HomeComponent_div_21_ng_container_1_Template, 2, 0, "ng-container", 29)(2, HomeComponent_div_21_ng_container_2_Template, 2, 0, "ng-container", 29);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("name")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function HomeComponent_div_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementContainerStart(0);
    i016.\u0275\u0275text(1, "Phone number is required.");
    i016.\u0275\u0275elementContainerEnd();
  }
}
function HomeComponent_div_28_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementContainerStart(0);
    i016.\u0275\u0275text(1, "Enter valid Indian mobile number.");
    i016.\u0275\u0275elementContainerEnd();
  }
}
function HomeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "div", 28);
    i016.\u0275\u0275template(1, HomeComponent_div_28_ng_container_1_Template, 2, 0, "ng-container", 29)(2, HomeComponent_div_28_ng_container_2_Template, 2, 0, "ng-container", 29);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("phoneNumber")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("phoneNumber")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["pattern"]);
  }
}
function HomeComponent_div_32_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementContainerStart(0);
    i016.\u0275\u0275text(1, "Description is required.");
    i016.\u0275\u0275elementContainerEnd();
  }
}
function HomeComponent_div_32_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementContainerStart(0);
    i016.\u0275\u0275text(1, "At least 10 characters required.");
    i016.\u0275\u0275elementContainerEnd();
  }
}
function HomeComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "div", 28);
    i016.\u0275\u0275template(1, HomeComponent_div_32_ng_container_1_Template, 2, 0, "ng-container", 29)(2, HomeComponent_div_32_ng_container_2_Template, 2, 0, "ng-container", 29);
    i016.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = i016.\u0275\u0275nextContext();
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", (tmp_1_0 = ctx_r0.contactForm.get("description")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.contactForm.get("description")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["minlength"]);
  }
}
function HomeComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "div", 30);
    i016.\u0275\u0275text(1, " \u2705 Data sent successfully! ");
    i016.\u0275\u0275elementEnd();
  }
}
function HomeComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "div", 31)(1, "div", 32);
    i016.\u0275\u0275element(2, "img", 33);
    i016.\u0275\u0275elementStart(3, "span");
    i016.\u0275\u0275text(4);
    i016.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    i016.\u0275\u0275advance(2);
    i016.\u0275\u0275property("src", category_r2.img, i016.\u0275\u0275sanitizeUrl)("alt", category_r2.title);
    i016.\u0275\u0275advance(2);
    i016.\u0275\u0275textInterpolate(category_r2.title);
  }
}
function HomeComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36);
    i016.\u0275\u0275element(3, "img", 33);
    i016.\u0275\u0275elementEnd();
    i016.\u0275\u0275elementStart(4, "div", 37)(5, "h4");
    i016.\u0275\u0275text(6);
    i016.\u0275\u0275elementEnd()();
    i016.\u0275\u0275elementStart(7, "div", 38);
    i016.\u0275\u0275text(8);
    i016.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const box_r3 = ctx.$implicit;
    i016.\u0275\u0275advance(3);
    i016.\u0275\u0275property("src", box_r3.image, i016.\u0275\u0275sanitizeUrl)("alt", box_r3.title);
    i016.\u0275\u0275advance(3);
    i016.\u0275\u0275textInterpolate(box_r3.title);
    i016.\u0275\u0275advance(2);
    i016.\u0275\u0275textInterpolate1(" ", box_r3.description, " ");
  }
}
function HomeComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    i016.\u0275\u0275elementStart(0, "div", 39);
    i016.\u0275\u0275element(1, "img", 40);
    i016.\u0275\u0275elementStart(2, "h3", 41);
    i016.\u0275\u0275text(3);
    i016.\u0275\u0275elementEnd();
    i016.\u0275\u0275elementStart(4, "p", 42);
    i016.\u0275\u0275text(5);
    i016.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i016.\u0275\u0275advance();
    i016.\u0275\u0275property("src", item_r4.icon, i016.\u0275\u0275sanitizeUrl);
    i016.\u0275\u0275advance(2);
    i016.\u0275\u0275textInterpolate(item_r4.title);
    i016.\u0275\u0275advance(2);
    i016.\u0275\u0275textInterpolate(item_r4.description);
  }
}
var HomeComponent = class _HomeComponent {
  fb;
  clientService;
  cards = [
    {
      image: "webapps.jpg",
      h1: "Build a functional website",
      keypoints: [
        "Template-based design",
        "Content upload",
        "Functional website",
        "Plugins and extensions"
      ],
      small_logos: [
        { name: "WordPress", logo: "wordpress-logo.png" },
        { name: "Wix", logo: "wix-logo.png" },
        { name: "Shopify", logo: "shopify-logo.png" }
      ]
    },
    {
      image: "iosapps.jpg",
      h1: "Launch your iOS mobile app",
      keypoints: [
        "Custom UI/UX Design",
        "App Store Optimization",
        "Native iOS Development",
        "Push Notifications Integration"
      ],
      small_logos: [
        { name: "App Store", logo: "appstore-logo.png" },
        { name: "TestFlight", logo: "testflight-logo.png" },
        { name: "Xcode", logo: "xcode-logo.png" }
      ]
    },
    {
      image: "androidapps.jpg",
      h1: "Create your Android application",
      keypoints: [
        "Material Design Standards",
        "Google Play Store Publishing",
        "Native Android Development",
        "API & Firebase Integration"
      ],
      small_logos: [
        { name: "Google Play", logo: "googleplay-logo.png" },
        { name: "APK Build", logo: "apkbuild-logo.png" },
        { name: "Android Studio", logo: "androidstudio-logo.png" }
      ]
    }
  ];
  transparentCards = [
    {
      icon: "animated/discovery.gif",
      title: "Discovery",
      description: "Clarify the what and company in why to bring your vision into focus."
    },
    {
      icon: "animated/planing.gif",
      title: "Planning",
      description: "Define the roadmap that aligns us on the journey Ahead."
    },
    {
      icon: "animated/design.gif",
      title: "Design",
      description: "We design accordingly to the plan into digital."
    },
    {
      icon: "animated/development.gif",
      title: "Development",
      description: "Shape function, try company ruthlessly and leave nothing to chance."
    },
    {
      icon: "animated/support.gif",
      title: "Support",
      description: "Count on us to continue to actively invest in your  long-term success"
    }
  ];
  categories = [
    { title: "WordPress", img: "https://drive.google.com/file/d/1KWbLXOUZm9myY-vQN-MVWRvQffp6nl1B/view?usp=drive_link" },
    { title: "Shopify", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2610.svg" },
    { title: "Custom Websites", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2617.svg" },
    { title: "Wix", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2611.svg" },
    { title: "Webflow", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2613.svg" },
    { title: "WooCommerce", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2615.svg" },
    { title: "Squarespace", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2612.svg" },
    { title: "Other Builders", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2618.svg" },
    { title: "ClickFunnels", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2616.svg" },
    { title: "GoDaddy", img: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2614.svg" }
  ];
  boxes = [
    {
      image: "animated/socialmedia.png",
      title: "Social Media Management",
      description: "Build brand, engage audiences, and drive growth across platforms"
    },
    {
      image: "animated/contentcreateion.png",
      title: "Content Creation",
      description: "Create compelling content to captivate and convert your audience"
    },
    {
      image: "animated/seooptimization.png",
      title: "SEO Optimization",
      description: "Improve your website\u2019s visibility and organic search traffic"
    },
    {
      image: "animated/paidmarketing.png",
      title: "Paid Advertising",
      description: "Maximize ROI with targeted ad campaigns across platforms"
    }
  ];
  contactForm;
  showAlert = false;
  constructor(fb, clientService) {
    this.fb = fb;
    this.clientService = clientService;
    this.contactForm = this.fb.group({
      name: ["", [Validators3.required, Validators3.minLength(2)]],
      phoneNumber: ["", [Validators3.required, Validators3.pattern(/^[6-9]\d{9}$/)]],
      description: ["", [Validators3.required, Validators3.minLength(10)]]
    });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const clientData = {
        name: this.contactForm.value.name,
        phoneNumber: this.contactForm.value.phoneNumber,
        description: this.contactForm.value.description
      };
      this.clientService.addClient(clientData).subscribe({
        next: () => {
          this.showAlert = true;
          setTimeout(() => {
            this.showAlert = false;
            this.contactForm.reset();
          }, 1e3);
        },
        error: (error) => {
          console.error("Error adding client:", error);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(i016.\u0275\u0275directiveInject(i14.FormBuilder), i016.\u0275\u0275directiveInject(InvokerService));
  };
  static \u0275cmp = /* @__PURE__ */ i016.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: false, decls: 46, vars: 8, consts: [[1, "block1"], [1, "split-section"], [1, "left-panel"], [1, "highlight"], ["src", "divider.png", "alt", "Divider", 1, "divider-img"], ["routerLink", "review-us", "target", "_blank", 1, "cta-button"], [1, "right-panel"], [1, "form-box"], [3, "ngSubmit", "formGroup"], ["for", "name"], ["id", "name", "formControlName", "name", "type", "text", "placeholder", "Your Name"], ["class", "error", 4, "ngIf"], ["for", "phone"], [1, "phone-field"], [1, "prefix"], ["id", "phone", "formControlName", "phoneNumber", "type", "tel", "placeholder", "10-digit number"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "4", "placeholder", "Write something..."], ["type", "submit"], ["class", "success-alert", 4, "ngIf"], [1, "carousel-container"], [1, "carousel-track"], ["class", "carousel-item", 4, "ngFor", "ngForOf"], [1, "box-grid"], ["class", "box", 4, "ngFor", "ngForOf"], [1, "main-heading"], [1, "section-wrapper"], ["class", "item-wrapper", 4, "ngFor", "ngForOf"], [1, "error"], [4, "ngIf"], [1, "success-alert"], [1, "carousel-item"], [1, "pill-button"], [3, "src", "alt"], [1, "box"], [1, "box-content"], [1, "box-image"], [1, "box-title"], [1, "box-description"], [1, "item-wrapper"], ["alt", "Icon", 1, "item-icon", 3, "src"], [1, "item-title"], [1, "item-description"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i016.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      i016.\u0275\u0275text(4, " We grow, innovate and empower ");
      i016.\u0275\u0275element(5, "br");
      i016.\u0275\u0275elementStart(6, "span", 3);
      i016.\u0275\u0275text(7, "Your businesses");
      i016.\u0275\u0275elementEnd()();
      i016.\u0275\u0275elementStart(8, "p");
      i016.\u0275\u0275text(9, " We have helped 50+ businesses in the last 3 years to grow with the help of creative, innovative marketing services. ");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275element(10, "img", 4);
      i016.\u0275\u0275elementStart(11, "a", 5);
      i016.\u0275\u0275text(12, "Check / Review our work");
      i016.\u0275\u0275elementEnd()();
      i016.\u0275\u0275elementStart(13, "div", 6)(14, "div", 7)(15, "h3");
      i016.\u0275\u0275text(16, "Contact Us");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(17, "form", 8);
      i016.\u0275\u0275listener("ngSubmit", function HomeComponent_Template_form_ngSubmit_17_listener() {
        return ctx.onSubmit();
      });
      i016.\u0275\u0275elementStart(18, "label", 9);
      i016.\u0275\u0275text(19, "Name");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275element(20, "input", 10);
      i016.\u0275\u0275template(21, HomeComponent_div_21_Template, 3, 2, "div", 11);
      i016.\u0275\u0275elementStart(22, "label", 12);
      i016.\u0275\u0275text(23, "Phone Number");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(24, "div", 13)(25, "span", 14);
      i016.\u0275\u0275text(26, "+91");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275element(27, "input", 15);
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275template(28, HomeComponent_div_28_Template, 3, 2, "div", 11);
      i016.\u0275\u0275elementStart(29, "label", 16);
      i016.\u0275\u0275text(30, "Description");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275element(31, "textarea", 17);
      i016.\u0275\u0275template(32, HomeComponent_div_32_Template, 3, 2, "div", 11);
      i016.\u0275\u0275elementStart(33, "button", 18);
      i016.\u0275\u0275text(34, "Submit");
      i016.\u0275\u0275elementEnd()()()()();
      i016.\u0275\u0275template(35, HomeComponent_div_35_Template, 2, 0, "div", 19);
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(36, "div", 20)(37, "div", 21);
      i016.\u0275\u0275template(38, HomeComponent_div_38_Template, 5, 3, "div", 22);
      i016.\u0275\u0275elementEnd()();
      i016.\u0275\u0275elementStart(39, "div", 23);
      i016.\u0275\u0275template(40, HomeComponent_div_40_Template, 9, 4, "div", 24);
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(41, "h4", 25);
      i016.\u0275\u0275text(42, "How We Work");
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275elementStart(43, "div", 26);
      i016.\u0275\u0275template(44, HomeComponent_div_44_Template, 6, 3, "div", 27);
      i016.\u0275\u0275elementEnd();
      i016.\u0275\u0275element(45, "br");
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      i016.\u0275\u0275advance(17);
      i016.\u0275\u0275property("formGroup", ctx.contactForm);
      i016.\u0275\u0275advance(4);
      i016.\u0275\u0275property("ngIf", ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.invalid));
      i016.\u0275\u0275advance(7);
      i016.\u0275\u0275property("ngIf", ((tmp_2_0 = ctx.contactForm.get("phoneNumber")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.contactForm.get("phoneNumber")) == null ? null : tmp_2_0.invalid));
      i016.\u0275\u0275advance(4);
      i016.\u0275\u0275property("ngIf", ((tmp_3_0 = ctx.contactForm.get("description")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.contactForm.get("description")) == null ? null : tmp_3_0.invalid));
      i016.\u0275\u0275advance(3);
      i016.\u0275\u0275property("ngIf", ctx.showAlert);
      i016.\u0275\u0275advance(3);
      i016.\u0275\u0275property("ngForOf", ctx.categories);
      i016.\u0275\u0275advance(2);
      i016.\u0275\u0275property("ngForOf", ctx.boxes);
      i016.\u0275\u0275advance(4);
      i016.\u0275\u0275property("ngForOf", ctx.transparentCards);
    }
  }, dependencies: [i32.NgClass, i32.NgComponentOutlet, i32.NgForOf, i32.NgIf, i32.NgTemplateOutlet, i32.NgStyle, i32.NgSwitch, i32.NgSwitchCase, i32.NgSwitchDefault, i32.NgPlural, i32.NgPluralCase, i4.RouterOutlet, i4.RouterLink, i4.RouterLinkActive, i4.\u0275EmptyOutletComponent, i14.\u0275NgNoValidate, i14.NgSelectOption, i14.\u0275NgSelectMultipleOption, i14.DefaultValueAccessor, i14.NumberValueAccessor, i14.RangeValueAccessor, i14.CheckboxControlValueAccessor, i14.SelectControlValueAccessor, i14.SelectMultipleControlValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.RequiredValidator, i14.MinLengthValidator, i14.MaxLengthValidator, i14.PatternValidator, i14.CheckboxRequiredValidator, i14.EmailValidator, i14.MinValidator, i14.MaxValidator, i14.FormControlDirective, i14.FormGroupDirective, i14.FormControlName, i14.FormGroupName, i14.FormArrayName, i14.NgModel, i14.NgModelGroup, i14.NgForm, AppComponent, ReviewUsComponent, LoginComponent, DashboardComponent, HeaderComponent, FooterComponent, AboutUsComponent, CarrersComponent, AdrioddevelopmentComponent, SeoComponent, UpcomingprojectsComponent, TermsandconditionsComponent, UpcomingprojectComponent, BlogsComponent, i32.AsyncPipe, i32.UpperCasePipe, i32.LowerCasePipe, i32.JsonPipe, i32.SlicePipe, i32.DecimalPipe, i32.PercentPipe, i32.TitleCasePipe, i32.CurrencyPipe, i32.DatePipe, i32.I18nPluralPipe, i32.I18nSelectPipe, i32.KeyValuePipe], styles: ['\n\n.split-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  padding: 60px 20px;\n  font-family: "Poppins", sans-serif;\n  box-sizing: border-box;\n}\n.left-panel[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n.left-panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #333;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: #ffc700;\n  font-size: 50px;\n}\n.left-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.divider-img[_ngcontent-%COMP%] {\n  max-width: 350px;\n  max-height: 100px;\n}\n.cta-button[_ngcontent-%COMP%] {\n  background-color: #f76c5e;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: background 0.3s ease;\n  width: fit-content;\n}\n.cta-button[_ngcontent-%COMP%]:hover {\n  background-color: #e65b4e;\n}\n.right-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1 1 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.form-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 25px 30px;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  width: 100%;\n  max-width: 400px;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #51c2d6;\n  color: #fff;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background 0.3s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #3cb1c8;\n}\n.error[_ngcontent-%COMP%] {\n  color: #e53935;\n  font-size: 0.85rem;\n  margin-top: -6px;\n  margin-bottom: 6px;\n}\n.phone-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.prefix[_ngcontent-%COMP%] {\n  background: #eee;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-right: none;\n  border-radius: 6px 0 0 6px;\n  font-size: 0.95rem;\n  color: #333;\n}\n.phone-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border-left: none;\n  border-radius: 0 6px 6px 0;\n}\n.success-alert[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 16px 28px;\n  border-radius: 10px;\n  font-size: 1rem;\n  z-index: 999;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .split-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 30px 20px;\n  }\n  .left-panel[_ngcontent-%COMP%], \n   .right-panel[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .form-box[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 20px;\n  }\n  .left-panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .block1[_ngcontent-%COMP%] {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n}\n.cards-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.cards-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.card[_ngcontent-%COMP%] {\n  flex: 0 0 30%;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 15px auto;\n  width: 80%;\n  border: 0;\n  border-top: 1px solid #ccc;\n}\n.keypoints[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 15px 0;\n}\n.keypoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.logos[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.small-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n@media (max-width: 992px) {\n  .cards-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n  }\n  .card[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    max-width: 500px;\n  }\n}\n.carousel-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  padding: 20px 0;\n  position: relative;\n}\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  animation: _ngcontent-%COMP%_scroll 30s linear infinite;\n}\n.pill-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 20px;\n  border: 2px solid black;\n  border-radius: 9999px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.pill-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n}\n.pill-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  white-space: nowrap;\n}\n.pill-button[_ngcontent-%COMP%]:hover {\n  border-color: #5e17eb;\n  background-color: rgba(94, 23, 235, 0.05);\n}\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 768px) {\n  .pill-button[_ngcontent-%COMP%] {\n    padding: 6px 16px;\n    gap: 8px;\n  }\n  .pill-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .pill-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.box-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.box[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.box[_ngcontent-%COMP%]:hover {\n  background-color: #292055;\n  border-color: #292055;\n  color: white;\n}\n.box[_ngcontent-%COMP%]:active {\n  background-color: #1d1940;\n  border-color: #1d1940;\n}\n.box-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 72px;\n  object-fit: contain;\n}\n.box-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 1.2rem;\n  color: #333;\n  transition: color 0.3s;\n}\n.box-description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #666;\n  font-size: 0.95rem;\n  transition: color 0.3s;\n}\n.box[_ngcontent-%COMP%]:hover   .box-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.box[_ngcontent-%COMP%]:hover   .box-description[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: transparent;\n  padding: 40px 0;\n}\n.item-wrapper[_ngcontent-%COMP%] {\n  flex: 0 0 18%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.item-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.item-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n@media (max-width: 992px) {\n  .item-wrapper[_ngcontent-%COMP%] {\n    flex: 0 0 30%;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 600px) {\n  .item-wrapper[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    margin-bottom: 30px;\n  }\n}\n.main-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  margin: 20px 0;\n}\n@media (max-width: 768px) {\n  .main-heading[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 0 10px;\n  }\n}\n@media (max-width: 480px) {\n  .main-heading[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n.split-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  padding: 60px 20px;\n  font-family: "Poppins", sans-serif;\n  box-sizing: border-box;\n}\n.left-panel[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n.left-panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #333;\n}\n.highlight[_ngcontent-%COMP%] {\n  color: #ffc700;\n  font-size: 50px;\n}\n.left-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.divider-img[_ngcontent-%COMP%] {\n  max-width: 250px;\n  max-height: 60px;\n}\n.cta-button[_ngcontent-%COMP%] {\n  background-color: #f76c5e;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: background 0.3s ease;\n  width: fit-content;\n}\n.cta-button[_ngcontent-%COMP%]:hover {\n  background-color: #e65b4e;\n}\n.right-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: 1 1 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.form-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 25px 30px;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  width: 100%;\n  max-width: 400px;\n  box-sizing: border-box;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\ntextarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background 0.3s ease;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #3cb1c8;\n}\n.error[_ngcontent-%COMP%] {\n  color: #e53935;\n  font-size: 0.85rem;\n  margin-top: -6px;\n  margin-bottom: 6px;\n}\n.phone-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.prefix[_ngcontent-%COMP%] {\n  background: #eee;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-right: none;\n  border-radius: 6px 0 0 6px;\n  font-size: 0.95rem;\n  color: #333;\n}\n.phone-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border-left: none;\n  border-radius: 0 6px 6px 0;\n}\n.success-alert[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 16px 28px;\n  border-radius: 10px;\n  font-size: 1rem;\n  z-index: 999;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .split-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 30px 20px;\n  }\n  .left-panel[_ngcontent-%COMP%], \n   .right-panel[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .form-box[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    padding: 20px;\n  }\n  .left-panel[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .block1[_ngcontent-%COMP%] {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n}\n.cards-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.cards-inner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.card[_ngcontent-%COMP%] {\n  flex: 0 0 30%;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.card-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.card[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 15px auto;\n  width: 80%;\n  border: 0;\n  border-top: 1px solid #ccc;\n}\n.keypoints[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 15px 0;\n}\n.keypoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.logos[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.small-logo[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n@media (max-width: 992px) {\n  .cards-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n  }\n  .card[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    max-width: 500px;\n  }\n}\n.carousel-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  padding: 20px 0;\n  position: relative;\n}\n.carousel-track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  animation: _ngcontent-%COMP%_scroll 30s linear infinite;\n}\n.pill-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 20px;\n  border: 2px solid black;\n  border-radius: 9999px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.pill-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n}\n.pill-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  white-space: nowrap;\n}\n.pill-button[_ngcontent-%COMP%]:hover {\n  border-color: #5e17eb;\n  background-color: rgba(94, 23, 235, 0.05);\n}\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 768px) {\n  .pill-button[_ngcontent-%COMP%] {\n    padding: 6px 16px;\n    gap: 8px;\n  }\n  .pill-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n  .pill-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.box-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.box[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.box[_ngcontent-%COMP%]:hover {\n  background-color: #292055;\n  border-color: #292055;\n  color: white;\n}\n.box[_ngcontent-%COMP%]:active {\n  background-color: #1d1940;\n  border-color: #1d1940;\n}\n.box-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 72px;\n  object-fit: contain;\n}\n.box-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 1.2rem;\n  color: #333;\n  transition: color 0.3s;\n}\n.box-description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #666;\n  font-size: 0.95rem;\n  transition: color 0.3s;\n}\n.box[_ngcontent-%COMP%]:hover   .box-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.box[_ngcontent-%COMP%]:hover   .box-description[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-wrapper[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: transparent;\n  padding: 40px 0;\n}\n.item-wrapper[_ngcontent-%COMP%] {\n  flex: 0 0 18%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.item-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.item-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.item-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n@media (max-width: 992px) {\n  .item-wrapper[_ngcontent-%COMP%] {\n    flex: 0 0 30%;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 600px) {\n  .item-wrapper[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    margin-bottom: 30px;\n  }\n}\n.main-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  margin: 20px 0;\n}\n@media (max-width: 768px) {\n  .main-heading[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 0 10px;\n  }\n}\n@media (max-width: 480px) {\n  .main-heading[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassMetadata(HomeComponent, [{
    type: Component15,
    args: [{ selector: "app-home", standalone: false, template: `<div class="block1">
    <div class="split-section">
        <!-- Left Content -->
        <div class="left-panel">
          <h1>
            We grow, innovate and empower <br>
            <span class="highlight">Your businesses</span>
          </h1>
          <p>
            We have helped 50+ businesses in the last 3 years to grow with the help of creative, innovative marketing services.
          </p>
          <img src="divider.png" alt="Divider" class="divider-img" />
          <a class="cta-button" routerLink="review-us" target="_blank">Check / Review our work</a>
        </div>
      
        <!-- Right Form -->
        <div class="right-panel">
          <div class="form-box">
            <h3>Contact Us</h3>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <!-- Name Field -->
              <label for="name">Name</label>
              <input id="name" formControlName="name" type="text" placeholder="Your Name" />
              <div class="error" *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.invalid">
                <ng-container *ngIf="contactForm.get('name')?.errors?.['required']">Name is required.</ng-container>
                <ng-container *ngIf="contactForm.get('name')?.errors?.['minlength']">Name must be at least 2 characters.</ng-container>
              </div>
      
              <!-- Phone Field -->
              <label for="phone">Phone Number</label>
              <div class="phone-field">
                <span class="prefix">+91</span>
                <input id="phone" formControlName="phoneNumber" type="tel" placeholder="10-digit number" />
              </div>
              <div class="error" *ngIf="contactForm.get('phoneNumber')?.touched && contactForm.get('phoneNumber')?.invalid">
                <ng-container *ngIf="contactForm.get('phoneNumber')?.errors?.['required']">Phone number is required.</ng-container>
                <ng-container *ngIf="contactForm.get('phoneNumber')?.errors?.['pattern']">Enter valid Indian mobile number.</ng-container>
              </div>
      
              <!-- Description Field -->
              <label for="description">Description</label>
              <textarea id="description" formControlName="description" rows="4" placeholder="Write something..."></textarea>
              <div class="error" *ngIf="contactForm.get('description')?.touched && contactForm.get('description')?.invalid">
                <ng-container *ngIf="contactForm.get('description')?.errors?.['required']">Description is required.</ng-container>
                <ng-container *ngIf="contactForm.get('description')?.errors?.['minlength']">At least 10 characters required.</ng-container>
              </div>
      
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      
      <!-- Alert -->
      <div class="success-alert" *ngIf="showAlert">
        \u2705 Data sent successfully!
      </div>
    </div>
    <!-- block 2 -->
    
    <!-- block 3 -->
    <div class="carousel-container">
      <div class="carousel-track">
        <div class="carousel-item" *ngFor="let category of categories">
          <div class="pill-button">
            <img [src]="category.img" [alt]="category.title" />
            <span>{{ category.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- block 4 -->
    <div class="box-grid">
      <div class="box" *ngFor="let box of boxes">
        <div class="box-content">
          <div class="box-image">
            <img [src]="box.image" [alt]="box.title" />
          </div>
          <div class="box-title">
            <h4>{{ box.title }}</h4>
          </div>
          <div class="box-description">
            {{ box.description }}
          </div>
        </div>
      </div>
    </div>
    <!-- block x -->
    <h4 class="main-heading">How We Work</h4>
    <div class="section-wrapper">
      <div class="item-wrapper" *ngFor="let item of transparentCards">
        <img [src]="item.icon" alt="Icon" class="item-icon">
        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-description">{{ item.description }}</p>
      </div>
    </div>
    
    <!-- block 5 -->
<br>`, styles: ['/* src/app/client/home/home.component.css */\n.split-section {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  padding: 60px 20px;\n  font-family: "Poppins", sans-serif;\n  box-sizing: border-box;\n}\n.left-panel {\n  flex: 1 1 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n.left-panel h1 {\n  font-size: 2rem;\n  color: #333;\n}\n.highlight {\n  color: #ffc700;\n  font-size: 50px;\n}\n.left-panel p {\n  color: #555;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.divider-img {\n  max-width: 350px;\n  max-height: 100px;\n}\n.cta-button {\n  background-color: #f76c5e;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: background 0.3s ease;\n  width: fit-content;\n}\n.cta-button:hover {\n  background-color: #e65b4e;\n}\n.right-panel {\n  width: 100%;\n  flex: 1 1 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.form-box {\n  background-color: #fff;\n  padding: 25px 30px;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  width: 100%;\n  max-width: 400px;\n  box-sizing: border-box;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\ninput,\ntextarea {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\ntextarea {\n  resize: vertical;\n  min-height: 100px;\n}\nbutton[type=submit] {\n  background-color: #51c2d6;\n  color: #fff;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background 0.3s ease;\n}\nbutton:hover {\n  background-color: #3cb1c8;\n}\n.error {\n  color: #e53935;\n  font-size: 0.85rem;\n  margin-top: -6px;\n  margin-bottom: 6px;\n}\n.phone-field {\n  display: flex;\n  align-items: center;\n}\n.prefix {\n  background: #eee;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-right: none;\n  border-radius: 6px 0 0 6px;\n  font-size: 0.95rem;\n  color: #333;\n}\n.phone-field input {\n  flex: 1;\n  border-left: none;\n  border-radius: 0 6px 6px 0;\n}\n.success-alert {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 16px 28px;\n  border-radius: 10px;\n  font-size: 1rem;\n  z-index: 999;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .split-section {\n    flex-direction: column;\n    padding: 30px 20px;\n  }\n  .left-panel,\n  .right-panel {\n    flex: 1 1 100%;\n  }\n  .form-box {\n    margin-top: 20px;\n    padding: 20px;\n  }\n  .left-panel h1 {\n    font-size: 1.6rem;\n  }\n  .block1 {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n}\n.cards-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.cards-inner {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.card {\n  flex: 0 0 30%;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.card-image {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.card hr {\n  margin: 15px auto;\n  width: 80%;\n  border: 0;\n  border-top: 1px solid #ccc;\n}\n.keypoints {\n  list-style: none;\n  padding: 0;\n  margin: 15px 0;\n}\n.keypoints li {\n  text-align: left;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.logos {\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.small-logo {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n@media (max-width: 992px) {\n  .cards-inner {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n  }\n  .card {\n    flex: 1 1 100%;\n    max-width: 500px;\n  }\n}\n.carousel-container {\n  overflow: hidden;\n  width: 100%;\n  padding: 20px 0;\n  position: relative;\n}\n.carousel-track {\n  display: flex;\n  gap: 20px;\n  animation: scroll 30s linear infinite;\n}\n.pill-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 20px;\n  border: 2px solid black;\n  border-radius: 9999px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.pill-button img {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n}\n.pill-button span {\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  white-space: nowrap;\n}\n.pill-button:hover {\n  border-color: #5e17eb;\n  background-color: rgba(94, 23, 235, 0.05);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 768px) {\n  .pill-button {\n    padding: 6px 16px;\n    gap: 8px;\n  }\n  .pill-button img {\n    width: 24px;\n    height: 24px;\n  }\n  .pill-button span {\n    font-size: 14px;\n  }\n}\n.box-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.box {\n  background: white;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.box:hover {\n  background-color: #292055;\n  border-color: #292055;\n  color: white;\n}\n.box:active {\n  background-color: #1d1940;\n  border-color: #1d1940;\n}\n.box-image img {\n  width: 88px;\n  height: 72px;\n  object-fit: contain;\n}\n.box-title h4 {\n  margin-top: 12px;\n  font-size: 1.2rem;\n  color: #333;\n  transition: color 0.3s;\n}\n.box-description {\n  margin-top: 10px;\n  color: #666;\n  font-size: 0.95rem;\n  transition: color 0.3s;\n}\n.box:hover .box-title h4,\n.box:hover .box-description {\n  color: white;\n}\n.section-wrapper {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: transparent;\n  padding: 40px 0;\n}\n.item-wrapper {\n  flex: 0 0 18%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.item-icon {\n  width: 50px;\n  height: 50px;\n}\n.item-title {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.item-description {\n  font-size: 14px;\n  color: #666;\n}\n@media (max-width: 992px) {\n  .item-wrapper {\n    flex: 0 0 30%;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 600px) {\n  .item-wrapper {\n    flex: 0 0 100%;\n    margin-bottom: 30px;\n  }\n}\n.main-heading {\n  text-align: center;\n  font-size: 24px;\n  margin: 20px 0;\n}\n@media (max-width: 768px) {\n  .main-heading {\n    font-size: 20px;\n    padding: 0 10px;\n  }\n}\n@media (max-width: 480px) {\n  .main-heading {\n    font-size: 18px;\n  }\n}\n.split-section {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 40px;\n  padding: 60px 20px;\n  font-family: "Poppins", sans-serif;\n  box-sizing: border-box;\n}\n.left-panel {\n  flex: 1 1 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n.left-panel h1 {\n  font-size: 2rem;\n  color: #333;\n}\n.highlight {\n  color: #ffc700;\n  font-size: 50px;\n}\n.left-panel p {\n  color: #555;\n  font-size: 1rem;\n  line-height: 1.6;\n}\n.divider-img {\n  max-width: 250px;\n  max-height: 60px;\n}\n.cta-button {\n  background-color: #f76c5e;\n  color: white;\n  padding: 12px 24px;\n  border-radius: 6px;\n  text-decoration: none;\n  font-weight: 500;\n  transition: background 0.3s ease;\n  width: fit-content;\n}\n.cta-button:hover {\n  background-color: #e65b4e;\n}\n.right-panel {\n  width: 100%;\n  flex: 1 1 40%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.form-box {\n  background-color: #fff;\n  padding: 25px 30px;\n  border-radius: 12px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n  width: 100%;\n  max-width: 400px;\n  box-sizing: border-box;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\ninput,\ntextarea {\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 1rem;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n}\ntextarea {\n  resize: vertical;\n  min-height: 100px;\n}\nbutton[type=submit] {\n  background-color: #5e17eb;\n  color: #fff;\n  padding: 10px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: 600;\n  transition: background 0.3s ease;\n}\nbutton:hover {\n  background-color: #3cb1c8;\n}\n.error {\n  color: #e53935;\n  font-size: 0.85rem;\n  margin-top: -6px;\n  margin-bottom: 6px;\n}\n.phone-field {\n  display: flex;\n  align-items: center;\n}\n.prefix {\n  background: #eee;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-right: none;\n  border-radius: 6px 0 0 6px;\n  font-size: 0.95rem;\n  color: #333;\n}\n.phone-field input {\n  flex: 1;\n  border-left: none;\n  border-radius: 0 6px 6px 0;\n}\n.success-alert {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #4caf50;\n  color: white;\n  padding: 16px 28px;\n  border-radius: 10px;\n  font-size: 1rem;\n  z-index: 999;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .split-section {\n    flex-direction: column;\n    padding: 30px 20px;\n  }\n  .left-panel,\n  .right-panel {\n    flex: 1 1 100%;\n  }\n  .form-box {\n    margin-top: 20px;\n    padding: 20px;\n  }\n  .left-panel h1 {\n    font-size: 1.6rem;\n  }\n  .block1 {\n    padding-left: 10%;\n    padding-right: 10%;\n  }\n}\n.cards-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.cards-inner {\n  display: flex;\n  justify-content: space-between;\n  width: 80%;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n.card {\n  flex: 0 0 30%;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.card-image {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n.card hr {\n  margin: 15px auto;\n  width: 80%;\n  border: 0;\n  border-top: 1px solid #ccc;\n}\n.keypoints {\n  list-style: none;\n  padding: 0;\n  margin: 15px 0;\n}\n.keypoints li {\n  text-align: left;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n.logos {\n  margin-top: 15px;\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.small-logo {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n}\n@media (max-width: 992px) {\n  .cards-inner {\n    flex-direction: column;\n    align-items: center;\n    gap: 30px;\n  }\n  .card {\n    flex: 1 1 100%;\n    max-width: 500px;\n  }\n}\n.carousel-container {\n  overflow: hidden;\n  width: 100%;\n  padding: 20px 0;\n  position: relative;\n}\n.carousel-track {\n  display: flex;\n  gap: 20px;\n  animation: scroll 30s linear infinite;\n}\n.pill-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 20px;\n  border: 2px solid black;\n  border-radius: 9999px;\n  background: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n.pill-button img {\n  width: 28px;\n  height: 28px;\n  object-fit: contain;\n}\n.pill-button span {\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  white-space: nowrap;\n}\n.pill-button:hover {\n  border-color: #5e17eb;\n  background-color: rgba(94, 23, 235, 0.05);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 768px) {\n  .pill-button {\n    padding: 6px 16px;\n    gap: 8px;\n  }\n  .pill-button img {\n    width: 24px;\n    height: 24px;\n  }\n  .pill-button span {\n    font-size: 14px;\n  }\n}\n.box-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n.box {\n  background: white;\n  border: 2px solid transparent;\n  border-radius: 12px;\n  padding: 20px;\n  text-align: center;\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n.box:hover {\n  background-color: #292055;\n  border-color: #292055;\n  color: white;\n}\n.box:active {\n  background-color: #1d1940;\n  border-color: #1d1940;\n}\n.box-image img {\n  width: 88px;\n  height: 72px;\n  object-fit: contain;\n}\n.box-title h4 {\n  margin-top: 12px;\n  font-size: 1.2rem;\n  color: #333;\n  transition: color 0.3s;\n}\n.box-description {\n  margin-top: 10px;\n  color: #666;\n  font-size: 0.95rem;\n  transition: color 0.3s;\n}\n.box:hover .box-title h4,\n.box:hover .box-description {\n  color: white;\n}\n.section-wrapper {\n  width: 80%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background: transparent;\n  padding: 40px 0;\n}\n.item-wrapper {\n  flex: 0 0 18%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n.item-icon {\n  width: 50px;\n  height: 50px;\n}\n.item-title {\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n.item-description {\n  font-size: 14px;\n  color: #666;\n}\n@media (max-width: 992px) {\n  .item-wrapper {\n    flex: 0 0 30%;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 600px) {\n  .item-wrapper {\n    flex: 0 0 100%;\n    margin-bottom: 30px;\n  }\n}\n.main-heading {\n  text-align: center;\n  font-size: 24px;\n  margin: 20px 0;\n}\n@media (max-width: 768px) {\n  .main-heading {\n    font-size: 20px;\n    padding: 0 10px;\n  }\n}\n@media (max-width: 480px) {\n  .main-heading {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], () => [{ type: i14.FormBuilder }, { type: InvokerService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i016.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/client/home/home.component.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fhome%2Fhome.component.ts%40HomeComponent";
  function HomeComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i016.\u0275\u0275replaceMetadata(HomeComponent, m.default, [i016, i32, i4, i14, app_component_exports, review_us_component_exports, login_component_exports, dashboard_component_exports, header_component_exports, footer_component_exports, about_us_component_exports, carrers_component_exports, adrioddevelopment_component_exports, seo_component_exports, upcomingprojects_component_exports, termsandconditions_component_exports, upcomingproject_component_exports, blogs_component_exports, invoker_service_exports], [Component15], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HomeComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HomeComponent_HmrLoad(d.timestamp)));
})();

// src/app/client/static/webdevelopment/webdevelopment.component.ts
import { Component as Component16 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i017 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var WebdevelopmentComponent = class _WebdevelopmentComponent {
  services = [
    {
      title: "Web Development",
      features: [
        "Responsive design for all devices",
        "SEO & performance optimization",
        "Backend integration (APIs, databases)",
        "Content Management Systems (CMS)",
        "E-commerce functionality",
        "Cross-browser compatibility"
      ]
    },
    {
      title: "iOS Development",
      features: [
        "Swift-based native applications",
        "Optimized for performance & battery",
        "Face ID, Touch ID, and Siri integration",
        "App Store deployment & compliance",
        "Custom animations and gestures",
        "Secure storage and networking"
      ]
    },
    {
      title: "Android Development",
      features: [
        "Kotlin/Java-based development",
        "Material Design UI/UX",
        "Google Play Store deployment",
        "Push notifications and Firebase",
        "Device compatibility & testing",
        "Battery-efficient background tasks"
      ]
    }
  ];
  static \u0275fac = function WebdevelopmentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WebdevelopmentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i017.\u0275\u0275defineComponent({ type: _WebdevelopmentComponent, selectors: [["app-webdevelopment"]], standalone: false, decls: 27, vars: 0, consts: [[1, "card-container"], [1, "section-card"], [1, "intro"]], template: function WebdevelopmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      i017.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      i017.\u0275\u0275text(3, "Web Development Services");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(4, "p", 2);
      i017.\u0275\u0275text(5, " We craft scalable, performant, and visually engaging websites that adapt perfectly to all devices and screen sizes. ");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(6, "ul")(7, "li")(8, "strong");
      i017.\u0275\u0275text(9, "Modern UI/UX:");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275text(10, " Intuitive interfaces with top-notch responsiveness.");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(11, "li")(12, "strong");
      i017.\u0275\u0275text(13, "Scalable Architecture:");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275text(14, " Built with modular, future-ready frameworks.");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(15, "li")(16, "strong");
      i017.\u0275\u0275text(17, "Full-Stack Solutions:");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275text(18, " Frontend, backend & database integration.");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(19, "li")(20, "strong");
      i017.\u0275\u0275text(21, "Performance Focused:");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275text(22, " Fast-loading, SEO-optimized web pages.");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275elementStart(23, "li")(24, "strong");
      i017.\u0275\u0275text(25, "Admin & Dashboards:");
      i017.\u0275\u0275elementEnd();
      i017.\u0275\u0275text(26, " Powerful, secure tools for your team.");
      i017.\u0275\u0275elementEnd()()()();
    }
  }, styles: ["\n\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.section-card[_ngcontent-%COMP%] {\n  background-color: #eaeaea;\n  border-radius: 20px;\n  padding: 30px;\n  max-width: 900px;\n  width: 100%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 25px rgba(94, 23, 235, 0.2);\n}\n.section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #5e17eb;\n  font-size: 28px;\n  margin-bottom: 20px;\n}\n.section-card[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333;\n}\n.section-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n  padding-left: 20px;\n}\n.section-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #444;\n}\n@media (max-width: 768px) {\n  .section-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .section-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .section-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=webdevelopment.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassMetadata(WebdevelopmentComponent, [{
    type: Component16,
    args: [{ selector: "app-webdevelopment", standalone: false, template: '<div class="card-container">\n  <div class="section-card">\n    <h2>Web Development Services</h2>\n    <p class="intro">\n      We craft scalable, performant, and visually engaging websites that adapt perfectly to all devices and screen sizes.\n    </p>\n    <ul>\n      <li><strong>Modern UI/UX:</strong> Intuitive interfaces with top-notch responsiveness.</li>\n      <li><strong>Scalable Architecture:</strong> Built with modular, future-ready frameworks.</li>\n      <li><strong>Full-Stack Solutions:</strong> Frontend, backend & database integration.</li>\n      <li><strong>Performance Focused:</strong> Fast-loading, SEO-optimized web pages.</li>\n      <li><strong>Admin & Dashboards:</strong> Powerful, secure tools for your team.</li>\n    </ul>\n  </div>\n</div>\n<!-- Block 2 -->\n ', styles: ["/* src/app/client/static/webdevelopment/webdevelopment.component.css */\n.card-container {\n  display: flex;\n  justify-content: center;\n  padding: 40px 20px;\n}\n.section-card {\n  background-color: #eaeaea;\n  border-radius: 20px;\n  padding: 30px;\n  max-width: 900px;\n  width: 100%;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.section-card:hover {\n  transform: scale(1.02);\n  box-shadow: 0 10px 25px rgba(94, 23, 235, 0.2);\n}\n.section-card h2 {\n  color: #5e17eb;\n  font-size: 28px;\n  margin-bottom: 20px;\n}\n.section-card .intro {\n  font-size: 16px;\n  margin-bottom: 20px;\n  color: #333;\n}\n.section-card ul {\n  list-style: disc;\n  padding-left: 20px;\n}\n.section-card li {\n  margin-bottom: 12px;\n  font-size: 15px;\n  color: #444;\n}\n@media (max-width: 768px) {\n  .section-card {\n    padding: 20px;\n  }\n  .section-card h2 {\n    font-size: 22px;\n  }\n  .section-card li {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=webdevelopment.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i017.\u0275setClassDebugInfo(WebdevelopmentComponent, { className: "WebdevelopmentComponent", filePath: "src/app/client/static/webdevelopment/webdevelopment.component.ts", lineNumber: 9 });
})();
(() => {
  const id = "src%2Fapp%2Fclient%2Fstatic%2Fwebdevelopment%2Fwebdevelopment.component.ts%40WebdevelopmentComponent";
  function WebdevelopmentComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(new URL("./@ng/component?c=" + id + "&t=" + encodeURIComponent(t), import.meta.url).href, 'import')
    ).then((m) => m.default && i017.\u0275\u0275replaceMetadata(WebdevelopmentComponent, m.default, [i017], [Component16], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && WebdevelopmentComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && WebdevelopmentComponent_HmrLoad(d.timestamp)));
})();

// src/app/app-routing.module.ts
import * as i018 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "review-us",
    component: ReviewUsComponent
  },
  {
    path: "carrers-for-you",
    component: CarrersComponent
  },
  {
    path: "webdevelopment",
    component: WebdevelopmentComponent
  },
  {
    path: "androiddevelopment",
    component: AdrioddevelopmentComponent
  },
  {
    path: "seooptimization",
    component: SeoComponent
  },
  {
    path: "blogs",
    component: BlogsComponent
  },
  {
    path: "terms_condition&privacy_policy",
    component: TermsandconditionsComponent
  },
  {
    path: "upcomingprojects",
    component: UpcomingprojectsComponent
  },
  {
    path: "admin",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ i018.\u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ i018.\u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i018.\u0275setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/app.module.ts
import { ReactiveFormsModule, FormsModule } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_forms.js?v=39868541";
import { HTTP_INTERCEPTORS, HttpClientModule } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_common_http.js?v=39868541";

// src/app/authhandler/auth.interceptor.ts
import { Injectable as Injectable2 } from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i019 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
var AuthInterceptor = class _AuthInterceptor {
  intercept(req, next) {
    const token = sessionStorage.getItem("token");
    if (token) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ i019.\u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i019.\u0275setClassMetadata(AuthInterceptor, [{
    type: Injectable2
  }], null, null);
})();

// src/app/app.module.ts
import * as i020 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_core.js?v=39868541";
import * as i15 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_common.js?v=39868541";
import * as i22 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_router.js?v=39868541";
import * as i33 from "/@fs/Users/do20465734/Desktop/velocityxdev/velocity-x-dev/.angular/cache/19.2.9/velocity-x-dev/vite/deps/@angular_forms.js?v=39868541";
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ i020.\u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  static \u0275inj = /* @__PURE__ */ i020.\u0275\u0275defineInjector({ providers: [
    provideClientHydration(withEventReplay()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ], imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i020.\u0275setClassMetadata(AppModule, [{
    type: NgModule2,
    args: [{
      declarations: [
        AppComponent,
        HomeComponent,
        ReviewUsComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent,
        FooterComponent,
        AboutUsComponent,
        CarrersComponent,
        AdrioddevelopmentComponent,
        SeoComponent,
        UpcomingprojectsComponent,
        TermsandconditionsComponent,
        UpcomingprojectComponent,
        BlogsComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
        provideClientHydration(withEventReplay()),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ],
      bootstrap: [AppComponent]
    }]
  }], null, null);
})();
i020.\u0275\u0275setComponentScope(AppComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(ReviewUsComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(LoginComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(DashboardComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(HeaderComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(FooterComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(AboutUsComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(CarrersComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(AdrioddevelopmentComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(SeoComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(UpcomingprojectsComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(TermsandconditionsComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  UpcomingprojectComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(UpcomingprojectComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  BlogsComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);
i020.\u0275\u0275setComponentScope(BlogsComponent, [
  i15.NgClass,
  i15.NgComponentOutlet,
  i15.NgForOf,
  i15.NgIf,
  i15.NgTemplateOutlet,
  i15.NgStyle,
  i15.NgSwitch,
  i15.NgSwitchCase,
  i15.NgSwitchDefault,
  i15.NgPlural,
  i15.NgPluralCase,
  i22.RouterOutlet,
  i22.RouterLink,
  i22.RouterLinkActive,
  i22.\u0275EmptyOutletComponent,
  i33.\u0275NgNoValidate,
  i33.NgSelectOption,
  i33.\u0275NgSelectMultipleOption,
  i33.DefaultValueAccessor,
  i33.NumberValueAccessor,
  i33.RangeValueAccessor,
  i33.CheckboxControlValueAccessor,
  i33.SelectControlValueAccessor,
  i33.SelectMultipleControlValueAccessor,
  i33.RadioControlValueAccessor,
  i33.NgControlStatus,
  i33.NgControlStatusGroup,
  i33.RequiredValidator,
  i33.MinLengthValidator,
  i33.MaxLengthValidator,
  i33.PatternValidator,
  i33.CheckboxRequiredValidator,
  i33.EmailValidator,
  i33.MinValidator,
  i33.MaxValidator,
  i33.FormControlDirective,
  i33.FormGroupDirective,
  i33.FormControlName,
  i33.FormGroupName,
  i33.FormArrayName,
  i33.NgModel,
  i33.NgModelGroup,
  i33.NgForm,
  AppComponent,
  HomeComponent,
  ReviewUsComponent,
  LoginComponent,
  DashboardComponent,
  HeaderComponent,
  FooterComponent,
  AboutUsComponent,
  CarrersComponent,
  AdrioddevelopmentComponent,
  SeoComponent,
  UpcomingprojectsComponent,
  TermsandconditionsComponent,
  UpcomingprojectComponent
], [i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe]);

// src/main.ts
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAubW9kdWxlLnRzIiwic3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJzcmMvYXBwL2NsaWVudC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jbGllbnQvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9zZXJ2aWNlL2ludm9rZXIuc2VydmljZS50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jbGllbnQvcmV2aWV3LXVzL3Jldmlldy11cy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NsaWVudC9yZXZpZXctdXMvcmV2aWV3LXVzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJzcmMvYXBwL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsInNyYy9hcHAvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jb21tb24vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY2xpZW50L2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY2xpZW50L2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jbGllbnQvY2FycmVycy9jYXJyZXJzLmNvbXBvbmVudC50cyIsInNyYy9hcHAvY2xpZW50L2NhcnJlcnMvY2FycmVycy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY2xpZW50L3N0YXRpYy9hZHJpb2RkZXZlbG9wbWVudC9hZHJpb2RkZXZlbG9wbWVudC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NsaWVudC9zdGF0aWMvYWRyaW9kZGV2ZWxvcG1lbnQvYWRyaW9kZGV2ZWxvcG1lbnQuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NsaWVudC9zdGF0aWMvc2VvL3Nlby5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NsaWVudC9zdGF0aWMvc2VvL3Nlby5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvY2xpZW50L3VwY29taW5ncHJvamVjdHMvdXBjb21pbmdwcm9qZWN0cy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NsaWVudC91cGNvbWluZ3Byb2plY3RzL3VwY29taW5ncHJvamVjdHMuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NsaWVudC9zdGF0aWMvdGVybXNhbmRjb25kaXRpb25zL3Rlcm1zYW5kY29uZGl0aW9ucy5jb21wb25lbnQudHMiLCJzcmMvYXBwL2NsaWVudC9zdGF0aWMvdGVybXNhbmRjb25kaXRpb25zL3Rlcm1zYW5kY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvYWRtaW4vdXBjb21pbmdwcm9qZWN0L3VwY29taW5ncHJvamVjdC5jb21wb25lbnQudHMiLCJzcmMvYXBwL2FkbWluL3VwY29taW5ncHJvamVjdC91cGNvbWluZ3Byb2plY3QuY29tcG9uZW50Lmh0bWwiLCJzcmMvYXBwL2NsaWVudC9zdGF0aWMvYmxvZ3MvYmxvZ3MuY29tcG9uZW50LnRzIiwic3JjL2FwcC9jbGllbnQvc3RhdGljL2Jsb2dzL2Jsb2dzLmNvbXBvbmVudC5odG1sIiwic3JjL2FwcC9jbGllbnQvc3RhdGljL3dlYmRldmVsb3BtZW50L3dlYmRldmVsb3BtZW50LmNvbXBvbmVudC50cyIsInNyYy9hcHAvY2xpZW50L3N0YXRpYy93ZWJkZXZlbG9wbWVudC93ZWJkZXZlbG9wbWVudC5jb21wb25lbnQuaHRtbCIsInNyYy9hcHAvYXV0aGhhbmRsZXIvYXV0aC5pbnRlcmNlcHRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xuXG5wbGF0Zm9ybUJyb3dzZXIoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlLCB7XG4gIG5nWm9uZUV2ZW50Q29hbGVzY2luZzogdHJ1ZSxcbn0pXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlLCBwcm92aWRlQ2xpZW50SHlkcmF0aW9uLCB3aXRoRXZlbnRSZXBsYXkgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnQvaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXZpZXdVc0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50L3Jldmlldy11cy9yZXZpZXctdXMuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbW1vbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dFVzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnQvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50JztcblxuLy9pbXBvcnRzXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2FycmVyc0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50L2NhcnJlcnMvY2FycmVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRyaW9kZGV2ZWxvcG1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudC9zdGF0aWMvYWRyaW9kZGV2ZWxvcG1lbnQvYWRyaW9kZGV2ZWxvcG1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlb0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50L3N0YXRpYy9zZW8vc2VvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVcGNvbWluZ3Byb2plY3RzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnQvdXBjb21pbmdwcm9qZWN0cy91cGNvbWluZ3Byb2plY3RzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc2FuZGNvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudC9zdGF0aWMvdGVybXNhbmRjb25kaXRpb25zL3Rlcm1zYW5kY29uZGl0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXBjb21pbmdwcm9qZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi91cGNvbWluZ3Byb2plY3QvdXBjb21pbmdwcm9qZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCbG9nc0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50L3N0YXRpYy9ibG9ncy9ibG9ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9hdXRoaGFuZGxlci9hdXRoLmludGVyY2VwdG9yJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgSG9tZUNvbXBvbmVudCxcbiAgICBSZXZpZXdVc0NvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBBYm91dFVzQ29tcG9uZW50LFxuICAgIENhcnJlcnNDb21wb25lbnQsXG4gICAgQWRyaW9kZGV2ZWxvcG1lbnRDb21wb25lbnQsXG4gICAgU2VvQ29tcG9uZW50LFxuICAgIFVwY29taW5ncHJvamVjdHNDb21wb25lbnQsXG4gICAgVGVybXNhbmRjb25kaXRpb25zQ29tcG9uZW50LFxuICAgIFVwY29taW5ncHJvamVjdENvbXBvbmVudCxcbiAgICBCbG9nc0NvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZUNsaWVudEh5ZHJhdGlvbih3aXRoRXZlbnRSZXBsYXkoKSksXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogQXV0aEludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudC9ob21lL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IFJldmlld1VzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnQvcmV2aWV3LXVzL3Jldmlldy11cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dFVzQ29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnQvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50JztcbmltcG9ydCB7IENhcnJlcnNDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudC9jYXJyZXJzL2NhcnJlcnMuY29tcG9uZW50JztcbmltcG9ydCB7IFVwY29taW5ncHJvamVjdHNDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudC91cGNvbWluZ3Byb2plY3RzL3VwY29taW5ncHJvamVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdlYmRldmVsb3BtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jbGllbnQvc3RhdGljL3dlYmRldmVsb3BtZW50L3dlYmRldmVsb3BtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZW9Db21wb25lbnQgfSBmcm9tICcuL2NsaWVudC9zdGF0aWMvc2VvL3Nlby5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRyaW9kZGV2ZWxvcG1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NsaWVudC9zdGF0aWMvYWRyaW9kZGV2ZWxvcG1lbnQvYWRyaW9kZGV2ZWxvcG1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRlcm1zYW5kY29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50L3N0YXRpYy90ZXJtc2FuZGNvbmRpdGlvbnMvdGVybXNhbmRjb25kaXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCbG9nc0NvbXBvbmVudCB9IGZyb20gJy4vY2xpZW50L3N0YXRpYy9ibG9ncy9ibG9ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9hZG1pbi9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDonJyxcbiAgICBjb21wb25lbnQ6SG9tZUNvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDonYWJvdXQtdXMnLFxuICAgIGNvbXBvbmVudDpBYm91dFVzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOidyZXZpZXctdXMnLFxuICAgIGNvbXBvbmVudDpSZXZpZXdVc0NvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDpcImNhcnJlcnMtZm9yLXlvdVwiLFxuICAgIGNvbXBvbmVudDpDYXJyZXJzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOid3ZWJkZXZlbG9wbWVudCcsXG4gICAgY29tcG9uZW50OldlYmRldmVsb3BtZW50Q29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOidhbmRyb2lkZGV2ZWxvcG1lbnQnLFxuICAgIGNvbXBvbmVudDpBZHJpb2RkZXZlbG9wbWVudENvbXBvbmVudFxuICB9LFxuICB7XG4gICAgcGF0aDonc2Vvb3B0aW1pemF0aW9uJyxcbiAgICBjb21wb25lbnQ6U2VvQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOidibG9ncycsXG4gICAgY29tcG9uZW50OkJsb2dzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOid0ZXJtc19jb25kaXRpb24mcHJpdmFjeV9wb2xpY3knLFxuICAgIGNvbXBvbmVudDpUZXJtc2FuZGNvbmRpdGlvbnNDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6J3VwY29taW5ncHJvamVjdHMnLFxuICAgIGNvbXBvbmVudDpVcGNvbWluZ3Byb2plY3RzQ29tcG9uZW50LFxuICB9LFxuICB7XG4gICAgIHBhdGg6J2FkbWluJyxcbiAgICAgY29tcG9uZW50OkxvZ2luQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOidkYXNoYm9hcmQnLFxuICAgIGNvbXBvbmVudDpEYXNoYm9hcmRDb21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW52b2tlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2ludm9rZXIuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICBjYXJkcyA9IFtcbiAgICB7XG4gICAgICBpbWFnZTogJ3dlYmFwcHMuanBnJyxcbiAgICAgIGgxOiAnQnVpbGQgYSBmdW5jdGlvbmFsIHdlYnNpdGUnLFxuICAgICAga2V5cG9pbnRzOiBbXG4gICAgICAgICdUZW1wbGF0ZS1iYXNlZCBkZXNpZ24nLFxuICAgICAgICAnQ29udGVudCB1cGxvYWQnLFxuICAgICAgICAnRnVuY3Rpb25hbCB3ZWJzaXRlJyxcbiAgICAgICAgJ1BsdWdpbnMgYW5kIGV4dGVuc2lvbnMnXG4gICAgICBdLFxuICAgICAgc21hbGxfbG9nb3M6IFtcbiAgICAgICAgeyBuYW1lOiAnV29yZFByZXNzJywgbG9nbzogJ3dvcmRwcmVzcy1sb2dvLnBuZycgfSxcbiAgICAgICAgeyBuYW1lOiAnV2l4JywgbG9nbzogJ3dpeC1sb2dvLnBuZycgfSxcbiAgICAgICAgeyBuYW1lOiAnU2hvcGlmeScsIGxvZ286ICdzaG9waWZ5LWxvZ28ucG5nJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogJ2lvc2FwcHMuanBnJyxcbiAgICAgIGgxOiAnTGF1bmNoIHlvdXIgaU9TIG1vYmlsZSBhcHAnLFxuICAgICAga2V5cG9pbnRzOiBbXG4gICAgICAgICdDdXN0b20gVUkvVVggRGVzaWduJyxcbiAgICAgICAgJ0FwcCBTdG9yZSBPcHRpbWl6YXRpb24nLFxuICAgICAgICAnTmF0aXZlIGlPUyBEZXZlbG9wbWVudCcsXG4gICAgICAgICdQdXNoIE5vdGlmaWNhdGlvbnMgSW50ZWdyYXRpb24nXG4gICAgICBdLFxuICAgICAgc21hbGxfbG9nb3M6IFtcbiAgICAgICAgeyBuYW1lOiAnQXBwIFN0b3JlJywgbG9nbzogJ2FwcHN0b3JlLWxvZ28ucG5nJyB9LFxuICAgICAgICB7IG5hbWU6ICdUZXN0RmxpZ2h0JywgbG9nbzogJ3Rlc3RmbGlnaHQtbG9nby5wbmcnIH0sXG4gICAgICAgIHsgbmFtZTogJ1hjb2RlJywgbG9nbzogJ3hjb2RlLWxvZ28ucG5nJyB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogJ2FuZHJvaWRhcHBzLmpwZycsXG4gICAgICBoMTogJ0NyZWF0ZSB5b3VyIEFuZHJvaWQgYXBwbGljYXRpb24nLFxuICAgICAga2V5cG9pbnRzOiBbXG4gICAgICAgICdNYXRlcmlhbCBEZXNpZ24gU3RhbmRhcmRzJyxcbiAgICAgICAgJ0dvb2dsZSBQbGF5IFN0b3JlIFB1Ymxpc2hpbmcnLFxuICAgICAgICAnTmF0aXZlIEFuZHJvaWQgRGV2ZWxvcG1lbnQnLFxuICAgICAgICAnQVBJICYgRmlyZWJhc2UgSW50ZWdyYXRpb24nXG4gICAgICBdLFxuICAgICAgc21hbGxfbG9nb3M6IFtcbiAgICAgICAgeyBuYW1lOiAnR29vZ2xlIFBsYXknLCBsb2dvOiAnZ29vZ2xlcGxheS1sb2dvLnBuZycgfSxcbiAgICAgICAgeyBuYW1lOiAnQVBLIEJ1aWxkJywgbG9nbzogJ2Fwa2J1aWxkLWxvZ28ucG5nJyB9LFxuICAgICAgICB7IG5hbWU6ICdBbmRyb2lkIFN0dWRpbycsIGxvZ286ICdhbmRyb2lkc3R1ZGlvLWxvZ28ucG5nJyB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuICB0cmFuc3BhcmVudENhcmRzID0gW1xuICAgIHtcbiAgICAgIGljb246ICdhbmltYXRlZC9kaXNjb3ZlcnkuZ2lmJyxcbiAgICAgIHRpdGxlOiAnRGlzY292ZXJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2xhcmlmeSB0aGUgd2hhdCBhbmQgY29tcGFueSBpbiB3aHkgdG8gYnJpbmcgeW91ciB2aXNpb24gaW50byBmb2N1cy4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2FuaW1hdGVkL3BsYW5pbmcuZ2lmJyxcbiAgICAgIHRpdGxlOiAnUGxhbm5pbmcnLFxuICAgICAgZGVzY3JpcHRpb246ICdEZWZpbmUgdGhlIHJvYWRtYXAgdGhhdCBhbGlnbnMgdXMgb24gdGhlIGpvdXJuZXkgQWhlYWQuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdhbmltYXRlZC9kZXNpZ24uZ2lmJyxcbiAgICAgIHRpdGxlOiAnRGVzaWduJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2UgZGVzaWduIGFjY29yZGluZ2x5IHRvIHRoZSBwbGFuIGludG8gZGlnaXRhbC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2FuaW1hdGVkL2RldmVsb3BtZW50LmdpZicsXG4gICAgICB0aXRsZTogJ0RldmVsb3BtZW50JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU2hhcGUgZnVuY3Rpb24sIHRyeSBjb21wYW55IHJ1dGhsZXNzbHkgYW5kIGxlYXZlIG5vdGhpbmcgdG8gY2hhbmNlLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnYW5pbWF0ZWQvc3VwcG9ydC5naWYnLFxuICAgICAgdGl0bGU6ICdTdXBwb3J0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ291bnQgb24gdXMgdG8gY29udGludWUgdG8gYWN0aXZlbHkgaW52ZXN0IGluIHlvdXIgIGxvbmctdGVybSBzdWNjZXNzJyxcbiAgICB9XG4gIF07XG4gIGNhdGVnb3JpZXMgPSBbXG4gICAgeyB0aXRsZTogJ1dvcmRQcmVzcycsIGltZzogJ2h0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9maWxlL2QvMUtXYkxYT1VabTlteVktdlFOLU1WV1J2UWZmcDZubDFCL3ZpZXc/dXNwPWRyaXZlX2xpbmsnIH0sXG4gICAgeyB0aXRsZTogJ1Nob3BpZnknLCBpbWc6ICdodHRwczovL2ZpdmVyci1yZXMuY2xvdWRpbmFyeS5jb20vaW1hZ2UvdXBsb2FkL3YxNTg0OTQ4MDUyL2dlbmVyYWxfYXNzZXRzL2NhdGVnb3JpZXMvbnNjXzAxLzI2MTAuc3ZnJyB9LFxuICAgIHsgdGl0bGU6ICdDdXN0b20gV2Vic2l0ZXMnLCBpbWc6ICdodHRwczovL2ZpdmVyci1yZXMuY2xvdWRpbmFyeS5jb20vaW1hZ2UvdXBsb2FkL3YxNTg0OTQ4MDUyL2dlbmVyYWxfYXNzZXRzL2NhdGVnb3JpZXMvbnNjXzAxLzI2MTcuc3ZnJyB9LFxuICAgIHsgdGl0bGU6ICdXaXgnLCBpbWc6ICdodHRwczovL2ZpdmVyci1yZXMuY2xvdWRpbmFyeS5jb20vaW1hZ2UvdXBsb2FkL3YxNTg0OTQ4MDUyL2dlbmVyYWxfYXNzZXRzL2NhdGVnb3JpZXMvbnNjXzAxLzI2MTEuc3ZnJyB9LFxuICAgIHsgdGl0bGU6ICdXZWJmbG93JywgaW1nOiAnaHR0cHM6Ly9maXZlcnItcmVzLmNsb3VkaW5hcnkuY29tL2ltYWdlL3VwbG9hZC92MTU4NDk0ODA1Mi9nZW5lcmFsX2Fzc2V0cy9jYXRlZ29yaWVzL25zY18wMS8yNjEzLnN2ZycgfSxcbiAgICB7IHRpdGxlOiAnV29vQ29tbWVyY2UnLCBpbWc6ICdodHRwczovL2ZpdmVyci1yZXMuY2xvdWRpbmFyeS5jb20vaW1hZ2UvdXBsb2FkL3YxNTg0OTQ4MDUyL2dlbmVyYWxfYXNzZXRzL2NhdGVnb3JpZXMvbnNjXzAxLzI2MTUuc3ZnJyB9LFxuICAgIHsgdGl0bGU6ICdTcXVhcmVzcGFjZScsIGltZzogJ2h0dHBzOi8vZml2ZXJyLXJlcy5jbG91ZGluYXJ5LmNvbS9pbWFnZS91cGxvYWQvdjE1ODQ5NDgwNTIvZ2VuZXJhbF9hc3NldHMvY2F0ZWdvcmllcy9uc2NfMDEvMjYxMi5zdmcnIH0sXG4gICAgeyB0aXRsZTogJ090aGVyIEJ1aWxkZXJzJywgaW1nOiAnaHR0cHM6Ly9maXZlcnItcmVzLmNsb3VkaW5hcnkuY29tL2ltYWdlL3VwbG9hZC92MTU4NDk0ODA1Mi9nZW5lcmFsX2Fzc2V0cy9jYXRlZ29yaWVzL25zY18wMS8yNjE4LnN2ZycgfSxcbiAgICB7IHRpdGxlOiAnQ2xpY2tGdW5uZWxzJywgaW1nOiAnaHR0cHM6Ly9maXZlcnItcmVzLmNsb3VkaW5hcnkuY29tL2ltYWdlL3VwbG9hZC92MTU4NDk0ODA1Mi9nZW5lcmFsX2Fzc2V0cy9jYXRlZ29yaWVzL25zY18wMS8yNjE2LnN2ZycgfSxcbiAgICB7IHRpdGxlOiAnR29EYWRkeScsIGltZzogJ2h0dHBzOi8vZml2ZXJyLXJlcy5jbG91ZGluYXJ5LmNvbS9pbWFnZS91cGxvYWQvdjE1ODQ5NDgwNTIvZ2VuZXJhbF9hc3NldHMvY2F0ZWdvcmllcy9uc2NfMDEvMjYxNC5zdmcnIH1cbiAgXTtcbiAgYm94ZXMgPSBbXG4gICAge1xuICAgICAgaW1hZ2U6ICdhbmltYXRlZC9zb2NpYWxtZWRpYS5wbmcnLFxuICAgICAgdGl0bGU6ICdTb2NpYWwgTWVkaWEgTWFuYWdlbWVudCcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0J1aWxkIGJyYW5kLCBlbmdhZ2UgYXVkaWVuY2VzLCBhbmQgZHJpdmUgZ3Jvd3RoIGFjcm9zcyBwbGF0Zm9ybXMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogJ2FuaW1hdGVkL2NvbnRlbnRjcmVhdGVpb24ucG5nJyxcbiAgICAgIHRpdGxlOiAnQ29udGVudCBDcmVhdGlvbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NyZWF0ZSBjb21wZWxsaW5nIGNvbnRlbnQgdG8gY2FwdGl2YXRlIGFuZCBjb252ZXJ0IHlvdXIgYXVkaWVuY2UnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogJ2FuaW1hdGVkL3Nlb29wdGltaXphdGlvbi5wbmcnLFxuICAgICAgdGl0bGU6ICdTRU8gT3B0aW1pemF0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSW1wcm92ZSB5b3VyIHdlYnNpdGXigJlzIHZpc2liaWxpdHkgYW5kIG9yZ2FuaWMgc2VhcmNoIHRyYWZmaWMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogJ2FuaW1hdGVkL3BhaWRtYXJrZXRpbmcucG5nJyxcbiAgICAgIHRpdGxlOiAnUGFpZCBBZHZlcnRpc2luZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ01heGltaXplIFJPSSB3aXRoIHRhcmdldGVkIGFkIGNhbXBhaWducyBhY3Jvc3MgcGxhdGZvcm1zJ1xuICAgIH1cbiAgXTtcblxuICBjb250YWN0Rm9ybTogRm9ybUdyb3VwO1xuICBzaG93QWxlcnQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixwcml2YXRlIGNsaWVudFNlcnZpY2U6SW52b2tlclNlcnZpY2UpIHtcbiAgICB0aGlzLmNvbnRhY3RGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKV1dLFxuICAgICAgcGhvbmVOdW1iZXI6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXls2LTldXFxkezl9JC8pXV0sXG4gICAgICBkZXNjcmlwdGlvbjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApXV0sXG4gICAgfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgaWYgKHRoaXMuY29udGFjdEZvcm0udmFsaWQpIHtcbiAgICBjb25zdCBjbGllbnREYXRhID0ge1xuICAgICAgbmFtZTogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5uYW1lLFxuICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuY29udGFjdEZvcm0udmFsdWUucGhvbmVOdW1iZXIsXG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5jb250YWN0Rm9ybS52YWx1ZS5kZXNjcmlwdGlvblxuICAgIH07XG5cbiAgICB0aGlzLmNsaWVudFNlcnZpY2UuYWRkQ2xpZW50KGNsaWVudERhdGEpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd0FsZXJ0ID0gdHJ1ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dBbGVydCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY29udGFjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBjbGllbnQ6JywgZXJyb3IpO1xuICAgICAgICAvLyBPcHRpb25hbDogc2hvdyBhbiBlcnJvciBhbGVydCB0byB0aGUgdXNlclxuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuY29udGFjdEZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICB9XG59XG59XG4iLCI8ZGl2IGNsYXNzPVwiYmxvY2sxXCI+XG4gICAgPGRpdiBjbGFzcz1cInNwbGl0LXNlY3Rpb25cIj5cbiAgICAgICAgPCEtLSBMZWZ0IENvbnRlbnQgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXBhbmVsXCI+XG4gICAgICAgICAgPGgxPlxuICAgICAgICAgICAgV2UgZ3JvdywgaW5ub3ZhdGUgYW5kIGVtcG93ZXIgPGJyPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj5Zb3VyIGJ1c2luZXNzZXM8L3NwYW4+XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdlIGhhdmUgaGVscGVkIDUwKyBidXNpbmVzc2VzIGluIHRoZSBsYXN0IDMgeWVhcnMgdG8gZ3JvdyB3aXRoIHRoZSBoZWxwIG9mIGNyZWF0aXZlLCBpbm5vdmF0aXZlIG1hcmtldGluZyBzZXJ2aWNlcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGltZyBzcmM9XCJkaXZpZGVyLnBuZ1wiIGFsdD1cIkRpdmlkZXJcIiBjbGFzcz1cImRpdmlkZXItaW1nXCIgLz5cbiAgICAgICAgICA8YSBjbGFzcz1cImN0YS1idXR0b25cIiByb3V0ZXJMaW5rPVwicmV2aWV3LXVzXCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q2hlY2sgLyBSZXZpZXcgb3VyIHdvcms8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgIDwhLS0gUmlnaHQgRm9ybSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LXBhbmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYm94XCI+XG4gICAgICAgICAgICA8aDM+Q29udGFjdCBVczwvaDM+XG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImNvbnRhY3RGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgPCEtLSBOYW1lIEZpZWxkIC0tPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImNvbnRhY3RGb3JtLmdldCgnbmFtZScpPy50b3VjaGVkICYmIGNvbnRhY3RGb3JtLmdldCgnbmFtZScpPy5pbnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRhY3RGb3JtLmdldCgnbmFtZScpPy5lcnJvcnM/LlsncmVxdWlyZWQnXVwiPk5hbWUgaXMgcmVxdWlyZWQuPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRhY3RGb3JtLmdldCgnbmFtZScpPy5lcnJvcnM/LlsnbWlubGVuZ3RoJ11cIj5OYW1lIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzLjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgICAgICAgICA8IS0tIFBob25lIEZpZWxkIC0tPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIj5QaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGhvbmUtZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZWZpeFwiPis5MTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwaG9uZVwiIGZvcm1Db250cm9sTmFtZT1cInBob25lTnVtYmVyXCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiMTAtZGlnaXQgbnVtYmVyXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiY29udGFjdEZvcm0uZ2V0KCdwaG9uZU51bWJlcicpPy50b3VjaGVkICYmIGNvbnRhY3RGb3JtLmdldCgncGhvbmVOdW1iZXInKT8uaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250YWN0Rm9ybS5nZXQoJ3Bob25lTnVtYmVyJyk/LmVycm9ycz8uWydyZXF1aXJlZCddXCI+UGhvbmUgbnVtYmVyIGlzIHJlcXVpcmVkLjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250YWN0Rm9ybS5nZXQoJ3Bob25lTnVtYmVyJyk/LmVycm9ycz8uWydwYXR0ZXJuJ11cIj5FbnRlciB2YWxpZCBJbmRpYW4gbW9iaWxlIG51bWJlci48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICAgICAgPCEtLSBEZXNjcmlwdGlvbiBGaWVsZCAtLT5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIGZvcm1Db250cm9sTmFtZT1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIldyaXRlIHNvbWV0aGluZy4uLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiY29udGFjdEZvcm0uZ2V0KCdkZXNjcmlwdGlvbicpPy50b3VjaGVkICYmIGNvbnRhY3RGb3JtLmdldCgnZGVzY3JpcHRpb24nKT8uaW52YWxpZFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250YWN0Rm9ybS5nZXQoJ2Rlc2NyaXB0aW9uJyk/LmVycm9ycz8uWydyZXF1aXJlZCddXCI+RGVzY3JpcHRpb24gaXMgcmVxdWlyZWQuPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnRhY3RGb3JtLmdldCgnZGVzY3JpcHRpb24nKT8uZXJyb3JzPy5bJ21pbmxlbmd0aCddXCI+QXQgbGVhc3QgMTAgY2hhcmFjdGVycyByZXF1aXJlZC48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDwhLS0gQWxlcnQgLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwic3VjY2Vzcy1hbGVydFwiICpuZ0lmPVwic2hvd0FsZXJ0XCI+XG4gICAgICAgIOKchSBEYXRhIHNlbnQgc3VjY2Vzc2Z1bGx5IVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBibG9jayAyIC0tPlxuICAgIFxuICAgIDwhLS0gYmxvY2sgMyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtdHJhY2tcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIiAqbmdGb3I9XCJsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaWxsLWJ1dHRvblwiPlxuICAgICAgICAgICAgPGltZyBbc3JjXT1cImNhdGVnb3J5LmltZ1wiIFthbHRdPVwiY2F0ZWdvcnkudGl0bGVcIiAvPlxuICAgICAgICAgICAgPHNwYW4+e3sgY2F0ZWdvcnkudGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBibG9jayA0IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJib3gtZ3JpZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImJveFwiICpuZ0Zvcj1cImxldCBib3ggb2YgYm94ZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJveC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBbc3JjXT1cImJveC5pbWFnZVwiIFthbHRdPVwiYm94LnRpdGxlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LXRpdGxlXCI+XG4gICAgICAgICAgICA8aDQ+e3sgYm94LnRpdGxlIH19PC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICB7eyBib3guZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIGJsb2NrIHggLS0+XG4gICAgPGg0IGNsYXNzPVwibWFpbi1oZWFkaW5nXCI+SG93IFdlIFdvcms8L2g0PlxuICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLXdyYXBwZXJcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0cmFuc3BhcmVudENhcmRzXCI+XG4gICAgICAgIDxpbWcgW3NyY109XCJpdGVtLmljb25cIiBhbHQ9XCJJY29uXCIgY2xhc3M9XCJpdGVtLWljb25cIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiaXRlbS10aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L2gzPlxuICAgICAgICA8cCBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25cIj57eyBpdGVtLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPCEtLSBibG9jayA1IC0tPlxuPGJyPiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnOyAvLyBJbXBvcnQgSHR0cENsaWVudFxuaW1wb3J0IHsgT2JzZXJ2YWJsZSxtYXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uL21vZGVscy9jbGllbnQubW9kZWwnOyAvLyBJbXBvcnQgQ2xpZW50IG1vZGVsXG5pbXBvcnQgeyBSZXZpZXcgfSBmcm9tICcuLi9tb2RlbHMvcmV2aWV3Lm1vZGVsJzsgLy8gSW1wb3J0IFJldmlldyBtb2RlbFxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnZva2VyU2VydmljZSB7XG4gIHByaXZhdGUgYXBpVXJsQ2xpZW50ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92ZWxvY2l0eXhkZXYvZG5rMS9hZG1pbi9nZXRjbGllbnRzJzsgLy8gQmFja2VuZCBVUkwgZm9yIENsaWVudFxuICBwcml2YXRlIGFwaVVybFJldmlldyA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvdmVsb2NpdHl4ZGV2L2RuazEvYWRtaW4vZ2V0cmV2aWV3cyc7IC8vIEJhY2tlbmQgVVJMIGZvciBSZXZpZXdcbiAgcHJpdmF0ZSBhcGlVcmxDbGllbnRkZWxldGUgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL3ZlbG9jaXR5eGRldi9kbmsxL2FkbWluL2RlbGV0ZWNsaWVudCc7IFxuICBwcml2YXRlIGFwaVVybFJldmlld2RlbGV0ZSA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvdmVsb2NpdHl4ZGV2L2RuazEvYWRtaW4vZGVsZXRlcmV2aWV3cyc7XG4gIFxuICAvLyBjbGllbnQgb3BlYXJpb25zIFxuICBwcml2YXRlIGFwaVVybEFkZENsaWVudEZyb21DbGllbnQ9XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdmVsb2NpdHl4ZGV2L2RuazEvY2xpZW50L2FkZGNsaWVudFwiO1xuICBwcml2YXRlIGFwaVVybEFkZFJldmlld0Zyb21DbGllbnQ9XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdmVsb2NpdHl4ZGV2L2RuazEvY2xpZW50L2FkZHJldmlld1wiO1xuICBwcml2YXRlIGFwaVVybEdldFJldmlld3NGb3JDbGllbnQ9XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdmVsb2NpdHl4ZGV2L2RuazEvY2xpZW50L3ZpZXdyZXZpZXdzXCJcblxuXG4gIC8vY29tbW9uIG9wZXJhdGlvbnMgXG4gIHByaXZhdGUgYXBpVXJsVmlld1Jldmlld3M9XCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdmVsb2NpdHl4ZGV2L2RuazEvY2xpZW50L3ZpZXdyZXZpZXdzXCJcbiAgcHJpdmF0ZSBhcGlVcmxWaWV3VXBDb21pbmdQcm9qZWN0cz1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS92ZWxvY2l0eXhkZXYvZG5rMS9jbGllbnQvdmlld3VwY29taW5ncHJvamVjdHNcIlxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cblxuICBnZXRDbGllbnRzKCk6IE9ic2VydmFibGU8Q2xpZW50W10+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRBdXRoSGVhZGVycygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENsaWVudFtdPih0aGlzLmFwaVVybENsaWVudCwgeyBoZWFkZXJzIH0pO1xuICB9XG4gIC8vIERlbGV0ZSBhIGNsaWVudFxuICBkZWxldGVDbGllbnQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldEF1dGhIZWFkZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8dm9pZD4oYCR7dGhpcy5hcGlVcmxDbGllbnRkZWxldGV9LyR7aWR9YCwgeyBoZWFkZXJzIH0pO1xuICB9XG4gIC8vYWRkIGNsaWVudFxuICBhZGRDbGllbnQoY2xpZW50OiBDbGllbnQpOiBPYnNlcnZhYmxlPENsaWVudD4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxDbGllbnQ+KHRoaXMuYXBpVXJsQWRkQ2xpZW50RnJvbUNsaWVudCwgY2xpZW50LHtoZWFkZXJzfSk7XG4gIH1cblxuICAvLyBHZXQgYWxsIHJldmlld3NcbiAgXG4gIGdldFJldmlld3NGb3JDbGllbnQoKTogT2JzZXJ2YWJsZTxSZXZpZXdbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PHsgcmV2aWV3czogUmV2aWV3W10gfT4odGhpcy5hcGlVcmxHZXRSZXZpZXdzRm9yQ2xpZW50KVxuICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiByZXNwb25zZS5yZXZpZXdzKSk7IC8vIEV4dHJhY3QgJ3Jldmlld3MnIGZyb20gcmVzcG9uc2VcbiAgfVxuICBnZXRSZXZpZXdzKCk6IE9ic2VydmFibGU8UmV2aWV3W10+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRBdXRoSGVhZGVycygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJldmlld1tdPih0aGlzLmFwaVVybFJldmlldywgeyBoZWFkZXJzIH0pO1xuICB9XG4gIC8vYWRkIHJldmlld1xuICBhZGRSZXZpZXcocmV2aWV3OiBSZXZpZXcpOiBPYnNlcnZhYmxlPFJldmlldz4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxSZXZpZXc+KHRoaXMuYXBpVXJsQWRkUmV2aWV3RnJvbUNsaWVudCwgcmV2aWV3LHtoZWFkZXJzfSk7XG4gIH1cblxuICAvLyBEZWxldGUgYSByZXZpZXdcbiAgZGVsZXRlUmV2aWV3KGlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRBdXRoSGVhZGVycygpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHZvaWQ+KGAke3RoaXMuYXBpVXJsUmV2aWV3ZGVsZXRlfS8ke2lkfWAsIHsgaGVhZGVycyB9KTtcbiAgfVxuICBwcml2YXRlIGdldEF1dGhIZWFkZXJzKCk6IEh0dHBIZWFkZXJzIHtcbiAgICBjb25zdCB0b2tlbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2F1dGhUb2tlbicpIHx8ICcnO1xuICAgIHJldHVybiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbiAgICB9KTtcbiAgfVxuICBcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgc3R5bGVVcmw6ICcuL2FwcC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICB0aXRsZSA9ICd2ZWxvY2l0eS14LWRldic7XG59XG4iLCI8YXBwLWhlYWRlcj48L2FwcC1oZWFkZXI+XG48ZGl2IGNsYXNzPVwicGFnZS1jb250ZW50XCI+XG4gICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuPC9kaXY+XG48YXBwLWZvb3Rlcj48L2FwcC1mb290ZXI+IiwiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJbnZva2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvaW52b2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IFJldmlldyB9IGZyb20gJy4uLy4uL21vZGVscy9yZXZpZXcubW9kZWwnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJldmlldy11cycsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV2aWV3LXVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Jldmlldy11cy5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBSZXZpZXdVc0NvbXBvbmVudHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixwcml2YXRlIHJldmlld1NlcnZpY2U6SW52b2tlclNlcnZpY2UscHJpdmF0ZSBodHBwQ2xpZW50Okh0dHBDbGllbnQgKSB7XG4gICAgdGhpcy5yZXZpZXdGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBuYW1lOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV1dLFxuICAgICAgZGVzY3JpcHRpb246IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV1dLFxuICAgICAgc3RhcnM6IFsxLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW4oMSksIFZhbGlkYXRvcnMubWF4KDUpXV1cbiAgICB9KTtcbiAgfVxuICByZXZpZXdzIDogUmV2aWV3W109W11cbiAgcmV2aWV3Rm9ybTogRm9ybUdyb3VwO1xuICBhbGVydFZpc2libGUgPSBmYWxzZTtcbiAgZGVmYXVsdFJldmlld3MgPSBbXG4gIHsgbmFtZTogJ0pvaG4gRG9lJywgZGVzY3JpcHRpb246ICdFeGNlbGxlbnQgc2VydmljZSBhbmQgdmVyeSBmcmllbmRseSBzdGFmZiEnLCBudW1iZXJPZlN0YXJzOiA1IH0sXG4gIHsgbmFtZTogJ0phbmUgU21pdGgnLCBkZXNjcmlwdGlvbjogJ1F1aWNrIHJlc3BvbnNlIGFuZCByZWxpYWJsZSBzdXBwb3J0LicsIG51bWJlck9mU3RhcnM6IDQgfSxcbiAgeyBuYW1lOiAnQWxleCBKb2huc29uJywgZGVzY3JpcHRpb246ICdIaWdobHkgcmVjb21tZW5kIGZvciBmYXN0IGRlbGl2ZXJ5IGFuZCBxdWFsaXR5IHdvcmsuJywgbnVtYmVyT2ZTdGFyczogNSB9LFxuICB7IG5hbWU6ICdFbWlseSBEYXZpcycsIGRlc2NyaXB0aW9uOiAnR29vZCBleHBlcmllbmNlIG92ZXJhbGwsIGJ1dCByb29tIGZvciBpbXByb3ZlbWVudC4nLCBudW1iZXJPZlN0YXJzOiAzIH0sXG4gIHsgbmFtZTogJ01pY2hhZWwgQnJvd24nLCBkZXNjcmlwdGlvbjogJ1Byb2Zlc3Npb25hbCBhbmQgdGltZWx5IHNlcnZpY2UuJywgbnVtYmVyT2ZTdGFyczogNCB9XG4gIF07XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmV2aWV3Rm9ybS5nZXQoJ25hbWUnKTtcbiAgfVxuICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmV2aWV3Rm9ybS5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gIH1cbiAgZ2V0IHN0YXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJldmlld0Zvcm0uZ2V0KCdzdGFycycpO1xuICB9XG4gIG9uU3RhckNsaWNrKHN0YXJJbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5yZXZpZXdGb3JtLnBhdGNoVmFsdWUoeyBzdGFyczogc3RhckluZGV4ICsgMSB9KTtcbiAgfVxuICBzdWJtaXRSZXZpZXcoKTogdm9pZCB7XG4gIGlmICh0aGlzLnJldmlld0Zvcm0udmFsaWQpIHtcbiAgICBjb25zdCByZXZpZXdEYXRhID0ge1xuICAgICAgbmFtZTogdGhpcy5yZXZpZXdGb3JtLnZhbHVlLm5hbWUsXG4gICAgICBudW1iZXJPZlN0YXJzOiB0aGlzLnJldmlld0Zvcm0udmFsdWUuc3RhcnMsIC8vIGFzc3VtaW5nICdzdGFycycgaXMgeW91ciBmb3JtIGNvbnRyb2xcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLnJldmlld0Zvcm0udmFsdWUuZGVzY3JpcHRpb25cbiAgICB9O1xuICAgIHRoaXMucmV2aWV3U2VydmljZS5hZGRSZXZpZXcocmV2aWV3RGF0YSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hbGVydFZpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJldmlld0Zvcm0ucmVzZXQoeyBzdGFyczogMSB9KTsgLy8gUmVzZXQgc3RhcnMgdG8gMVxuICAgICAgICB0aGlzLmxvYWRSZXZpZXdzKCk7IC8vIPCflIEgcmUtZmV0Y2ggcmV2aWV3c1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWxlcnRWaXNpYmxlID0gZmFsc2UsIDMwMDApO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBwb3N0aW5nIHJldmlldzonLCBlcnJvcik7XG4gICAgICAgIC8vIE9wdGlvbmFsOiBzaG93IGVycm9yIGFsZXJ0XG4gICAgICB9XG4gICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmV2aWV3Rm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG4gIHJlc2V0Rm9ybSgpIHtcbiAgICB0aGlzLnJldmlld0Zvcm0ucmVzZXQoeyBzdGFyczogMSB9KTsgLy8gUmVzZXQgc3RhcnMgdG8gMSBvbiBmb3JtIHJlc2V0XG4gIH1cbiAgbG9hZFJldmlld3MoKXtcbiAgdGhpcy5odHBwQ2xpZW50LmdldDx7IHJldmlld3M6IFJldmlld1tdIH0+KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvdmVsb2NpdHl4ZGV2L2RuazEvY2xpZW50L3ZpZXdyZXZpZXdzJykuc3Vic2NyaWJlKHtcbiAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMucmV2aWV3cyA9IFsuLi50aGlzLmRlZmF1bHRSZXZpZXdzLCAuLi5yZXNwb25zZS5yZXZpZXdzXTsgLy8gPC0tIHVzZSB0aGUgLnJldmlld3MgYXJyYXlcbiAgICB9LFxuICAgIGVycm9yOiAoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXZpZXdzOicsIGVycik7XG4gICAgICB0aGlzLnJldmlld3MgPSBbLi4udGhpcy5kZWZhdWx0UmV2aWV3c107IC8vIGZhbGxiYWNrXG4gICAgfVxuICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKTp2b2lke1xuICAgIHRoaXMubG9hZFJldmlld3MoKVxufVxufVxuIiwiPGRpdiBjbGFzcz1cInJldmlldy1jb250YWluZXJcIj5cbiAgPCEtLSBUb3Agc2VjdGlvbjogRm9ybSAtLT5cbiAgPGRpdiBjbGFzcz1cInRvcC1yb3dcIj5cbiAgICA8IS0tIFJldmlldyBGb3JtIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJveFwiPlxuICAgICAgPGgzPlN1Ym1pdCBSZXZpZXc8L2gzPlxuICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJyZXZpZXdGb3JtXCIgKG5nU3VibWl0KT1cInN1Ym1pdFJldmlldygpXCI+XG4gICAgICAgIDwhLS0gTmFtZSAtLT5cbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJuYW1lPy50b3VjaGVkICYmIG5hbWU/LmludmFsaWRcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibmFtZT8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5OYW1lIGlzIHJlcXVpcmVkLjwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJuYW1lPy5lcnJvcnM/LlsnbWlubGVuZ3RoJ11cIj5NaW5pbXVtIDQgY2hhcmFjdGVycy48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwic3RhcnM/LnRvdWNoZWQgJiYgc3RhcnM/LmludmFsaWRcIj5TZWxlY3QgYXQgbGVhc3QgMSBzdGFyLjwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPCEtLSBDb21tZW50cyAtLT5cbiAgICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudHNcIiBmb3JtQ29udHJvbE5hbWU9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBkb3duIHlvdXIgY29tbWVudHM/XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJkZXNjcmlwdGlvbj8udG91Y2hlZCAmJiBkZXNjcmlwdGlvbj8uaW52YWxpZFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZXNjcmlwdGlvbj8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5Db21tZW50cyByZXF1aXJlZC48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGVzY3JpcHRpb24/LmVycm9ycz8uWydtaW5sZW5ndGgnXVwiPk1pbmltdW0gMTAgY2hhcmFjdGVycy48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBTdGFycyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJzXCI+XG4gICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHN0YXIgb2YgWzAsMSwyLDMsNF1cIiBcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25TdGFyQ2xpY2soc3RhcilcIiBcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2dvbGQnOiByZXZpZXdGb3JtLnZhbHVlLnN0YXJzID4gc3Rhcn1cIj5cbiAgICAgICAgICAgICYjOTczMztcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCJyZXZpZXdGb3JtLmludmFsaWRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPGRpdiAqbmdJZj1cImFsZXJ0VmlzaWJsZVwiIGNsYXNzPVwiYWxlcnRcIj5cbiAgICAgICAgUmV2aWV3IHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPCEtLSBCb3R0b20gUmV2aWV3IENhcmRzIC0tPiAgXG4gIDxkaXYgY2xhc3M9XCJjbGllbnQtcmV2aWV3c1wiPkNsaWVudCBSZXZpZXdzPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyZXZpZXdzLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJyZXZpZXctY2FyZFwiICpuZ0Zvcj1cImxldCByZXZpZXcgb2YgcmV2aWV3c1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJldmlldy1oZWFkZXJcIj5cbiAgICAgICAgPGgzPnt7IHJldmlldy5uYW1lIH19PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXJzXCI+XG4gICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHMgb2YgWzAsMSwyLDMsNF1cIiBbbmdDbGFzc109XCJ7J2dvbGQnOiByZXZpZXcubnVtYmVyT2ZTdGFycyA+IHN9XCI+JiM5NzMzOzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwPnt7IHJldmlldy5kZXNjcmlwdGlvbiB9fTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gRHVtbXkgQ2FyZHMgdG8gTWFpbnRhaW4gMy1wZXItcm93IExheW91dCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicmV2aWV3LWNhcmQgZHVtbXlcIiAqbmdJZj1cInJldmlld3MubGVuZ3RoICUgMyAhPT0gMFwiPjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyZXZpZXctY2FyZCBkdW1teVwiICpuZ0lmPVwicmV2aWV3cy5sZW5ndGggJSAzID09PSAxXCI+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgbG9naW5Gb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKSxcbiAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNildKVxuICB9KTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQscHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7fVxuICBnZXQgZW1haWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naW5Gb3JtLmdldCgnZW1haWwnKTtcbiAgfVxuXG4gIGdldCBwYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dpbkZvcm0uZ2V0KCdwYXNzd29yZCcpO1xuICB9XG4gIGFsZXJ0TWVzc2FnZTogc3RyaW5nID0gJyc7XG5cbiAgc2hvd0FsZXJ0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMuYWxlcnRNZXNzYWdlID0gbWVzc2FnZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbGVydE1lc3NhZ2UgPSAnJztcbiAgICB9LCAzMDAwKTsgLy8gYXV0by1oaWRlIGFmdGVyIDMgc2Vjb25kc1xuICB9XG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvZ2luRm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5odHRwLnBvc3Q8eyB0b2tlbjogc3RyaW5nOyBhZG1pbjogc3RyaW5nOyBsb2dpblRpbWU6IHN0cmluZyB9PignaHR0cDovL2xvY2FsaG9zdDozMDAxL3ZlbG9jaXR5eGRldi9kbmsxL2FkbWluL2xvZ2luJyx0aGlzLmxvZ2luRm9ybS52YWx1ZSkuc3Vic2NyaWJlKHtcbiAgICAgICAgbmV4dDogKHJlcykgPT4ge1xuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2F1dGhUb2tlbicsIHJlcy50b2tlbik7XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWRtaW4nLCByZXMuYWRtaW4pO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICAgYWxlcnQoJ0xvZ2luIGZhaWxlZDogJyArIGVyci5lcnJvci5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dpbkZvcm0ubWFya0FsbEFzVG91Y2hlZCgpOyAvLyBUcmlnZ2VyIHZhbGlkYXRpb24gbWVzc2FnZXNcbiAgICB9XG4gIH1cbn0iLCI8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGVcIj5BZG1pbiBMb2dpbjwvaDI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIGNsYXNzPVwibG9naW4tZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiZW1haWw/LmludmFsaWQgJiYgZW1haWw/LnRvdWNoZWRcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW1haWw/LmVycm9ycz8uWydyZXF1aXJlZCddXCI+RW1haWwgaXMgcmVxdWlyZWQ8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW1haWw/LmVycm9ycz8uWydlbWFpbCddXCI+SW52YWxpZCBlbWFpbDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJwYXNzd29yZD8uaW52YWxpZCAmJiBwYXNzd29yZD8udG91Y2hlZFwiPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZD8uZXJyb3JzPy5bJ3JlcXVpcmVkJ11cIj5QYXNzd29yZCBpcyByZXF1aXJlZDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJwYXNzd29yZD8uZXJyb3JzPy5bJ21pbmxlbmd0aCddXCI+TWluIDYgY2hhcmFjdGVyczwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwibG9naW5Gb3JtLmludmFsaWRcIiBjbGFzcz1cImJ0bi1zdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L2Rpdj5cbjwhLS0gYmxvY2syIC0tPlxuIDxkaXYgY2xhc3M9XCJhbGVydFwiICpuZ0lmPVwiYWxlcnRNZXNzYWdlXCI+XG4gIHt7IGFsZXJ0TWVzc2FnZSB9fVxuPC9kaXY+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2xpZW50Lm1vZGVsJztcbmltcG9ydCB7IEludm9rZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9pbnZva2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV2aWV3IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jldmlldy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1kYXNoYm9hcmQnLFxuICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9kYXNoYm9hcmQuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IHtcbiAgY2xpZW50czogQ2xpZW50W10gPSBbXTtcbiAgcmV2aWV3czogUmV2aWV3W10gPSBbXTtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogSW52b2tlclNlcnZpY2UpIHt9XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZmV0Y2hDbGllbnRzKCk7XG4gICAgdGhpcy5mZXRjaFJldmlld3MoKTsgICAgXG4gIH1cbiAgXG4gIC8vIEZldGNoIGFsbCBjbGllbnRzXG4gIGZldGNoQ2xpZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0Q2xpZW50cygpLnN1YnNjcmliZShcbiAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuY2xpZW50cyA9IGRhdGE7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNsaWVudHM6JywgZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyBEZWxldGUgYSBjbGllbnQgYnkgSURcbiAgZGVsZXRlQ2xpZW50KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuZGVsZXRlQ2xpZW50KGlkKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZGVsZXRlZCBjbGllbnQgZnJvbSB0aGUgbGlzdFxuICAgICAgICB0aGlzLmNsaWVudHMgPSB0aGlzLmNsaWVudHMuZmlsdGVyKGNsaWVudCA9PiBjbGllbnQuX2lkICE9PSBpZCk7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGNsaWVudDonLCBlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGZldGNoUmV2aWV3cygpOiB2b2lkIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuZ2V0UmV2aWV3cygpLnN1YnNjcmliZShcbiAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMucmV2aWV3cyA9IGRhdGE7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJldmlld3M6JywgZXJyb3IpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICAvLyBEZWxldGUgYSByZXZpZXcgYnkgSURcbiAgZGVsZXRlUmV2aWV3KGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFwaVNlcnZpY2UuZGVsZXRlUmV2aWV3KGlkKS5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZGVsZXRlZCByZXZpZXcgZnJvbSB0aGUgbGlzdFxuICAgICAgICB0aGlzLnJldmlld3MgPSB0aGlzLnJldmlld3MuZmlsdGVyKHJldmlldyA9PiByZXZpZXcuX2lkICE9PSBpZCk7XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHJldmlldzonLCBlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC00XCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1sZy02IG1iLTQgdGFibGUtc2VjdGlvblwiPlxuICAgICAgPGgzPkNsaWVudHM8L2gzPlxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TmFtZTwvdGg+XG4gICAgICAgICAgICA8dGg+UGhvbmU8L3RoPlxuICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cbiAgICAgICAgICAgIDx0aD5jcmVhdGVkIG9uPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBjbGllbnQgb2YgY2xpZW50c1wiPlxuICAgICAgICAgICAgPHRkPnt7IGNsaWVudC5uYW1lfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IGNsaWVudC5waG9uZU51bWJlciB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgY2xpZW50LmRlc2NyaXB0aW9uIH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD57eyBjbGllbnQuY3JlYXRlZEF0IH19PC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVwiIChjbGljayk9XCJkZWxldGVDbGllbnQoY2xpZW50Ll9pZCEpXCI+RGVsPC9idXR0b24+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbGctNiBtYi00IHRhYmxlLXNlY3Rpb25cIj5cbiAgICAgIDxoMz5SZXZpZXdzPC9oMz5cbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPlN0YXJzPC90aD5cbiAgICAgICAgICAgIDx0aD5Db21tZW50czwvdGg+XG4gICAgICAgICAgICA8dGg+Y3JlYXRlZCBvbjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgcmV2aWV3IG9mIHJldmlld3NcIj5cbiAgICAgICAgICAgIDx0ZD57eyByZXZpZXcubmFtZSB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3sgcmV2aWV3Lm51bWJlck9mU3RhcnMgfX08L3RkPlxuICAgICAgICAgICAgPHRkPnt7IHJldmlldy5kZXNjcmlwdGlvbiB9fTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3tyZXZpZXcuY3JlYXRlZEF0fX08L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgKGNsaWNrKT1cImRlbGV0ZVJldmlldyhyZXZpZXcuX2lkISlcIj5EZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1oZWFkZXInLFxuICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2hlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IHtcbiAgbWVudU9wZW4gPSBmYWxzZTtcblxuICB0b2dnbGVNZW51KCkge1xuICAgIHRoaXMubWVudU9wZW4gPSAhdGhpcy5tZW51T3BlbjtcbiAgfVxufVxuIiwiPGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgPGltZyBzcmM9XCJsb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiBzdHlsZT1cImhlaWdodDogNDA7IHdpZHRoOiAxNTBweDtcIj5cbiAgICAgIDwvZGl2PlxuICBcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYtYXJlYVwiPlxuICAgICAgICA8bmF2IFtjbGFzcy5hY3RpdmVdPVwibWVudU9wZW5cIj5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaT48YSByb3V0ZXJMaW5rPVwidXBjb21pbmdwcm9qZWN0c1wiPlVwY29taW5nIHByb2plY3RzPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICA8YT5TZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ3ZWJkZXZlbG9wbWVudFwiPldlYiBEZXZlbG9wbWVudDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiYW5kcm9pZGRldmVsb3BtZW50XCI+QW5kcmlvZC9JT1MgRGV2ZWxvcG1lbnQ8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cInNlb29wdGltaXphdGlvblwiPlNFTyBPcHRpbWl6YXRpb248L2E+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPjxhIHJvdXRlckxpbms9XCJjYXJyZXJzLWZvci15b3VcIj5jYXJyZXJzPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1idG5cIj5cbiAgICAgICAgICA8YnV0dG9uIHJvdXRlckxpbms9XCIvYWJvdXQtdXNcIj5BYm91dCBVczwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYW1idXJnZXJcIiAoY2xpY2spPVwidG9nZ2xlTWVudSgpXCI+XG4gICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuICAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvb3RlcicsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuXG59XG4iLCI8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgPCEtLSBSb3cgMTogU29jaWFsIE1lZGlhIExpbmtzIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcm93IHJvdy0xXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9sbG93LXVzXCI+Rm9sbG93IFVzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic29jaWFsLWljb25zXCI+XG4gICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cImljb25zL2xpbmtlZGluLnN2Z1wiIGNsYXNzPVwiaWNvbi13aGl0ZVwiIGFsdD1cIkxpbmtlZEluXCIgLz48L2E+XG4gICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cImljb25zL3R3aXR0ZXIteC5zdmdcIiBjbGFzcz1cImljb24td2hpdGVcIiBhbHQ9XCJUd2l0dGVyXCIgLz48L2E+XG4gICAgICAgIDxhIGhyZWY9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cImljb25zL2luc3RhZ3JhbS5zdmdcIiBjbGFzcz1cImljb24td2hpdGVcIiBhbHQ9XCJpbnN0YWdyYW1cIiAvPjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBcbiAgICA8IS0tIFJvdyAyOiBDb21wYW55IEluZm9ybWF0aW9uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcm93IHJvdy0yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgIDxoND5Db21wYW55PC9oND5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiYWJvdXQtdXNcIj5BYm91dCBVczwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiY2FycmVycy1mb3IteW91XCI+Q2FyZWVyczwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiYmxvZ3NcIj5CbG9nPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgPGg0PkxpbmtzPC9oND5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwidGVybXNfY29uZGl0aW9uJnByaXZhY3lfcG9saWN5XCI+UHJpdmFjeSBQb2xpY3k8L2E+PC9saT5cbiAgICAgICAgICA8bGk+PGEgaHJlZj1cInRlcm1zX2NvbmRpdGlvbiZwcml2YWN5X3BvbGljeVwiPlRlcm1zICYgQ29uZGl0aW9uczwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgIDxoND5BZGRyZXNzPC9oND5cbiAgICAgICAgPHA+NTAxLTEvNSxpbmRpcmEgbmlsYXlhLGdvd2xpZG9kZGksZmluYWNpYWwgZGlzdHJpY3QsXG4gICAgICAgICAgS1ZSYW5nYXJlZGR5LDUwMDA4MjwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBcbiAgICA8IS0tIFJvdyAzOiBDb3B5cmlnaHQgTm90aWNlIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcm93IHJvdy0zXCI+XG4gICAgICA8cD7CqSAyMDI1IFZlbG9jaXR5IERldmVsb3BlcnMg4oCUIEZhc3QuIFJlc3BvbnNpdmUuIFJlbGlhYmxlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuPC9mb290ZXI+XG4gICIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYWJvdXQtdXMnLFxuICBzdGFuZGFsb25lOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LXVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0VXNDb21wb25lbnQge1xuICB0ZWFtTWVtYmVycyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnTmF2ZWVuIEt1bWFyJyxcbiAgICAgIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInLFxuICAgICAgc2tpbGxzOiAnUmVhY3QsIEFuZ3VsYXIsIFR5cGVTY3JpcHQnLFxuICAgICAgaW1hZ2U6ICdhbmltYXRlZC9hYm91dHVzMi5naWYnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVmVua2F0IFNhaScsXG4gICAgICByb2xlOiAnTW9iaWxlIERldmVsb3BlcicsXG4gICAgICBza2lsbHM6ICdSZWFjdCBOYXRpdmUsIEZsdXR0ZXInLFxuICAgICAgaW1hZ2U6ICdhbmltYXRlZC9hYm91dHVzMi5naWYnXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWFoZXNoIEJhYnUnLFxuICAgICAgcm9sZTogJ0Nsb3VkIEFyY2hpdGVjdCcsXG4gICAgICBza2lsbHM6ICdBV1MsIERvY2tlciwgS3ViZXJuZXRlcycsXG4gICAgICBpbWFnZTogJ2FuaW1hdGVkL2Fib3V0dXMuZ2lmJ1xuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1RhbmlzaHEnLFxuICAgICAgcm9sZTogJ1VJL1VYIERlc2lnbmVyJyxcbiAgICAgIHNraWxsczogJ0ZpZ21hLCBTa2V0Y2gnLFxuICAgICAgaW1hZ2U6ICdhbmltYXRlZC9hYm91dHVzLmdpZidcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTd2FteScsXG4gICAgICByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInLFxuICAgICAgc2tpbGxzOiAnTm9kZS5qcywgRXhwcmVzcycsXG4gICAgICBpbWFnZTogJ2FuaW1hdGVkL2Fib3V0dXMuZ2lmJ1xuICAgIH1cbiAgXTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJhYm91dC11cy1jb250YWluZXJcIj5cbiAgICA8IS0tIFRvcCBTZWN0aW9uOiBJbWFnZSArIFRleHQgLS0+XG4gICAgPGRpdiBjbGFzcz1cInRvcC1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibGVmdC1zaWRlXCI+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGltZyBzcmM9XCJhYm91dC11cy5wbmdcIiBhbHQ9XCJXZWIgRGV2IFdvcmtcIiBjbGFzcz1cIndvcmstaW1hZ2VcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtc2lkZVwiPlxuICAgICAgICA8aDE+V2UgQXJlIFdlYiBEZXZlbG9wZXJzPC9oMT5cbiAgICAgICAgPHA+V2l0aCAzKyB5ZWFycyBvZiBleHBlcmllbmNlLCB3ZSd2ZSBjcmFmdGVkIGhpZ2gtcXVhbGl0eSB3ZWIsIGlPUywgYW5kIEFuZHJvaWQgYXBwcyBmb3Igb3ZlciAxMDAgY2xpZW50cy4gT3VyIHRlYW0gaXMgc2tpbGxlZCBpbiBSZWFjdCwgQW5ndWxhciwgVHlwZVNjcmlwdCwgSmF2YVNjcmlwdCwgUmVhY3QgTmF0aXZlLCBIVE1MLCBDU1MsIGFuZCBBV1MgQ2xvdWQsIGJ1aWxkaW5nIHNjYWxhYmxlLCB1c2VyLWZyaWVuZGx5IHNvbHV0aW9ucyB0aGF0IGRyaXZlIGJ1c2luZXNzIGdyb3d0aC48L3A+XG4gICAgICAgIFxuICAgICAgICA8aDM+VGVjaG5vbG9neTwvaDM+XG4gICAgICAgIDxwPklubm92YXRpb24gaXMgYXQgdGhlIGNvcmUgb2Ygb3VyIHNvbHV0aW9ucy4gV2UgbGV2ZXJhZ2UgY3V0dGluZy1lZGdlIHRlY2hub2xvZ2llcyB0byBjcmVhdGUgc2VhbWxlc3MgZGlnaXRhbCBleHBlcmllbmNlcywgZnJvbSBVSS9VWCBkZXNpZ24gdG8gYXBwIGRldmVsb3BtZW50LCBlbnN1cmluZyB5b3VyIGJ1c2luZXNzIHN0YXlzIGFoZWFkIGluIHRoZSBldmVyLWV2b2x2aW5nIGRpZ2l0YWwgbGFuZHNjYXBlLjwvcD5cbiAgICAgICAgXG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+PHN0cm9uZz5VSS9VWCBEZXNpZ246PC9zdHJvbmc+IENyZWF0aW5nIGludHVpdGl2ZSBhbmQgZW5nYWdpbmcgaW50ZXJmYWNlcy48L2xpPlxuICAgICAgICAgIDxsaT48c3Ryb25nPldlYiAmIE1vYmlsZSBEZXZlbG9wbWVudDo8L3N0cm9uZz4gRXhwZXJ0IGluIFJlYWN0LCBBbmd1bGFyLCBSZWFjdCBOYXRpdmUsIGFuZCBtb3JlLjwvbGk+XG4gICAgICAgICAgPGxpPjxzdHJvbmc+Q2xvdWQgSW5mcmFzdHJ1Y3R1cmU6PC9zdHJvbmc+IFNjYWxhYmxlLCBzZWN1cmUgc29sdXRpb25zIHBvd2VyZWQgYnkgQVdTIENsb3VkLjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgXG4gICAgPCEtLSBCb3R0b20gU2VjdGlvbjogTWVldCB0aGUgVGVhbSAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLXNlY3Rpb25cIj5cbiAgICAgIDxoMj5NZWV0IHRoZSBUZWFtPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZWFtLWNhcmRzXCI+XG4gICAgICAgIDwhLS0gUm93IDE6IDIgQ2FyZHMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXJvdyByb3ctMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nRm9yPVwibGV0IG1lbWJlciBvZiB0ZWFtTWVtYmVycy5zbGljZSgwLCAyKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtaW1nXCI+XG4gICAgICAgICAgICAgIDxpbWcgW3NyY109XCJtZW1iZXIuaW1hZ2VcIiBbYWx0XT1cIm1lbWJlci5uYW1lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDM+e3sgbWVtYmVyLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICA8cD57eyBtZW1iZXIucm9sZSB9fTwvcD5cbiAgICAgICAgICAgICAgPHA+e3sgbWVtYmVyLnNraWxscyB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgIDwhLS0gUm93IDI6IDMgQ2FyZHMgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXJvdyByb3ctM1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgKm5nRm9yPVwibGV0IG1lbWJlciBvZiB0ZWFtTWVtYmVycy5zbGljZSgyKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtaW1nXCI+XG4gICAgICAgICAgICAgIDxpbWcgW3NyY109XCJtZW1iZXIuaW1hZ2VcIiBbYWx0XT1cIm1lbWJlci5uYW1lXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8aDM+e3sgbWVtYmVyLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICA8cD57eyBtZW1iZXIucm9sZSB9fTwvcD5cbiAgICAgICAgICAgICAgPHA+e3sgbWVtYmVyLnNraWxscyB9fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4gICIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY2FycmVycycsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FycmVycy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9jYXJyZXJzLmNvbXBvbmVudC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIENhcnJlcnNDb21wb25lbnQge1xuICBqb2JzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyIChBbmd1bGFyKScsXG4gICAgICB0eXBlOiAnRnVsbC10aW1lJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGV2ZWxvcCBjdXR0aW5nLWVkZ2UgdXNlciBpbnRlcmZhY2VzIHVzaW5nIEFuZ3VsYXIgYW5kIFR5cGVTY3JpcHQuJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdNb2JpbGUgQXBwIERldmVsb3BlciAoUmVhY3QgTmF0aXZlKScsXG4gICAgICB0eXBlOiAnRnVsbC10aW1lJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQnVpbGQgY3Jvc3MtcGxhdGZvcm0gYXBwcyBmb3IgaU9TIGFuZCBBbmRyb2lkIHdpdGggbW9kZXJuIHRlY2guJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdOb2RlLmpzIEJhY2tlbmQgRW5naW5lZXInLFxuICAgICAgdHlwZTogJ0NvbnRyYWN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRGVzaWduIHNjYWxhYmxlIEFQSXMgYW5kIGNsb3VkIGludGVncmF0aW9ucyB3aXRoIE5vZGUuanMgYW5kIEFXUy4nXG4gICAgfVxuICBdO1xuXG4gIHJlYXNvbnMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdSZW1vdGUgRnJpZW5kbHknLFxuICAgICAgdGV4dDogJ1dvcmsgZnJvbSBhbnl3aGVyZSB3aXRoIGZsZXhpYmxlIGhvdXJzIGFuZCBhbiBhc3luYyBjdWx0dXJlLidcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnR3Jvd3RoLUZvY3VzZWQnLFxuICAgICAgdGV4dDogJ1dlIHN1cHBvcnQgeW91ciBwcm9mZXNzaW9uYWwgZ29hbHMgdGhyb3VnaCBtZW50b3JzaGlwIGFuZCB1cHNraWxsaW5nLidcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnUmVhbCBJbXBhY3QnLFxuICAgICAgdGV4dDogJ0J1aWxkIG1lYW5pbmdmdWwgc29mdHdhcmUgZm9yIGJ1c2luZXNzZXMgYWNyb3NzIHRoZSBnbG9iZS4nXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ01vZGVybiBTdGFjaycsXG4gICAgICB0ZXh0OiAnUmVhY3QsIEFuZ3VsYXIsIE5vZGUuanMsIEFXUyDigJQgd2Ugd29yayB3aXRoIHRvb2xzIHRoYXQgbWF0dGVyLidcbiAgICB9XG4gIF07XG5cbiAgYXBwbHkocG9zaXRpb246IHN0cmluZykge1xuICAgIHdpbmRvdy5vcGVuKGBtYWlsdG86Y2FyZWVyc0B2ZWxvY2l0eXhkZXYuY29tP3N1YmplY3Q9QXBwbGljYXRpb24gZm9yICR7cG9zaXRpb259YCk7XG4gIH1cbn0iLCI8ZGl2IGNsYXNzPVwiY2FyZWVycy13cmFwcGVyXCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJoZXJvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVyby1jb250ZW50XCI+XG4gICAgICAgIDxoMT5DYXJlZXJzIGF0IFZlbG9jaXR5IERldmVsb3BlcnM8L2gxPlxuICAgICAgICA8cD5XZSBjcmVhdGUgYmVhdXRpZnVsIGRpZ2l0YWwgcHJvZHVjdHMuIFdhbnQgdG8gaGVscCB1cyBkZXNpZ24gdGhlIGZ1dHVyZT88L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIFxuICAgIDxzZWN0aW9uIGNsYXNzPVwicGVya3NcIj5cbiAgICAgIDxoMj5XaHkgV29yayBXaXRoIFVzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwZXJrcy1ncmlkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXJrLWNhcmRcIiAqbmdGb3I9XCJsZXQgcGVyayBvZiByZWFzb25zXCI+XG4gICAgICAgICAgPGgzPnt7IHBlcmsudGl0bGUgfX08L2gzPlxuICAgICAgICAgIDxwPnt7IHBlcmsudGV4dCB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIFxuICAgIDxzZWN0aW9uIGNsYXNzPVwib3BlbmluZ3NcIj5cbiAgICAgIDxoMj5DdXJyZW50IE9wZW5pbmdzPC9oMj5cbiAgICAgIDxkaXYgY2xhc3M9XCJqb2JzLWdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImpvYi1jYXJkXCIgKm5nRm9yPVwibGV0IGpvYiBvZiBqb2JzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImpvYi1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMz57eyBqb2IudGl0bGUgfX08L2gzPlxuICAgICAgICAgICAgPHNwYW4+e3sgam9iLnR5cGUgfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHA+e3sgam9iLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImFwcGx5KGpvYi50aXRsZSlcIj5BcHBseSBOb3c8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gIDwvZGl2PlxuICAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFkcmlvZGRldmVsb3BtZW50JyxcbiAgc3RhbmRhbG9uZTogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZHJpb2RkZXZlbG9wbWVudC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hZHJpb2RkZXZlbG9wbWVudC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBBZHJpb2RkZXZlbG9wbWVudENvbXBvbmVudCB7XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jYXJkXCI+XG4gICAgPGgyPkFuZHJvaWQgJiBpT1MgQXBwIERldmVsb3BtZW50PC9oMj5cbiAgICA8cCBjbGFzcz1cImludHJvXCI+XG4gICAgICBXZSBkZWxpdmVyIGN1dHRpbmctZWRnZSBtb2JpbGUgYXBwbGljYXRpb25zIHRhaWxvcmVkIHRvIHlvdXIgYnVzaW5lc3MgZ29hbHMg4oCUIGNvbWJpbmluZyBzcGVlZCwgcGVyZm9ybWFuY2UsIGFuZCBzbGVlayBVSS5cbiAgICA8L3A+XG4gICAgPHVsPlxuICAgICAgPGxpPjxzdHJvbmc+Q3Jvc3MtUGxhdGZvcm0gQnVpbGRzOjwvc3Ryb25nPiBPbmUgY29kZWJhc2UgZm9yIGJvdGggQW5kcm9pZCBhbmQgaU9TLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5OYXRpdmUgRXhwZXJpZW5jZTo8L3N0cm9uZz4gT3B0aW1pemVkIGZvciBmYXN0IHJlc3BvbnNlICYgbG93IGJhdHRlcnkgdXNhZ2UuPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPkFwcCBTdG9yZSBMYXVuY2g6PC9zdHJvbmc+IENvbXBsZXRlIHN1cHBvcnQgZm9yIHB1Ymxpc2hpbmcgJiBjb21wbGlhbmNlLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5QdXNoIE5vdGlmaWNhdGlvbnM6PC9zdHJvbmc+IFJlYWwtdGltZSB1c2VyIGVuZ2FnZW1lbnQgc3lzdGVtcy48L2xpPlxuICAgICAgPGxpPjxzdHJvbmc+U2VjdXJlIEF1dGggJiBBUElzOjwvc3Ryb25nPiBTYWZlIGxvZ2luLCBwYXltZW50LCBhbmQgYmFja2VuZCBjb25uZWN0aW9ucy48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlbycsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Nlby5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBTZW9Db21wb25lbnQge1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cInNlY3Rpb24tY2FyZFwiPlxuICAgIDxoMj5TRU8gJiBQZXJmb3JtYW5jZSBPcHRpbWl6YXRpb248L2gyPlxuICAgIDxwIGNsYXNzPVwiaW50cm9cIj5cbiAgICAgIE91ciBTRU8gZXhwZXJ0cyBoZWxwIHlvdSByYW5rIGhpZ2hlciwgbG9hZCBmYXN0ZXIsIGFuZCBjb252ZXJ0IGJldHRlci4gR3JvdyB5b3VyIGF1ZGllbmNlIHdpdGggcmVhbCByZXN1bHRzLlxuICAgIDwvcD5cbiAgICA8dWw+XG4gICAgICA8bGk+PHN0cm9uZz5Pbi1QYWdlIFNFTzo8L3N0cm9uZz4gTWV0YSB0YWdzLCBzdHJ1Y3R1cmVkIGRhdGEsIGFuZCBjb250ZW50IGF1ZGl0LjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5UZWNobmljYWwgU0VPOjwvc3Ryb25nPiBTcGVlZCwgc2VjdXJpdHksIGFuZCBtb2JpbGUgcmVzcG9uc2l2ZW5lc3MgZml4ZXMuPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPktleXdvcmQgUmVzZWFyY2g6PC9zdHJvbmc+IFN0cmF0ZWdpYyB0YXJnZXRpbmcgdG8gYXR0cmFjdCBxdWFsaXR5IGxlYWRzLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5CYWNrbGluayBTdHJhdGVneTo8L3N0cm9uZz4gSGlnaC1hdXRob3JpdHkgbGluayBidWlsZGluZyB0ZWNobmlxdWVzLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5BbmFseXRpY3MgSW50ZWdyYXRpb246PC9zdHJvbmc+IE1lYXN1cmFibGUgcGVyZm9ybWFuY2UgaW5zaWdodHMgJiBLUElzLjwvbGk+XG4gICAgPC91bD5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtdXBjb21pbmdwcm9qZWN0cycsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBjb21pbmdwcm9qZWN0cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi91cGNvbWluZ3Byb2plY3RzLmNvbXBvbmVudC5jc3MnXG59KVxuZXhwb3J0IGNsYXNzIFVwY29taW5ncHJvamVjdHNDb21wb25lbnQge1xuICBzdGF0aWNEYXRhID0gW1xuICB7XG4gICAgdGl0bGU6ICdXZWIgRGV2ZWxvcG1lbnQgUGxhdGZvcm0nLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAn8J+nsSBNb2R1bGFyIGFuZCBjb21wb25lbnQtZHJpdmVuIGRlc2lnbiBzeXN0ZW0nLFxuICAgICAgJ+KaoSBCdWlsdCB3aXRoIEFuZ3VsYXIsIE5vZGUuanMsIGFuZCBNb25nb0RCJyxcbiAgICAgICfwn5ug77iPIERlc2lnbmVkIGZvciBwZXJmb3JtYW5jZSBhbmQgZWFzeSBzY2FsaW5nJ1xuICAgIF0sXG4gICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MDg5NDkwODM2MS05NjcxOTUwMzMyMTU/YXV0bz1mb3JtYXQmZml0PWNyb3Amdz04MDAmcT04MCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnQW5kcm9pZCBBcHAgU3VpdGUnLFxuICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAn8J+TsSBBIHN1aXRlIG9mIHByb2R1Y3Rpdml0eSBhcHBzIGZvciBwcm9mZXNzaW9uYWxzJyxcbiAgICAgICfwn46oIEJlYXV0aWZ1bCwgY2xlYW4gVUkgd2l0aCBpbnR1aXRpdmUgbmF2aWdhdGlvbicsXG4gICAgICAn8J+TpCBDbG91ZCBzeW5jLCBvZmZsaW5lIHN1cHBvcnQsIGFuZCBwdXNoIG5vdGlmaWNhdGlvbnMnXG4gICAgXSxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTgwODk0OTA4MzYxLTk2NzE5NTAzMzIxNT9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdBSS1Qb3dlcmVkIERhc2hib2FyZCcsXG4gICAgZGVzY3JpcHRpb246IFtcbiAgICAgICfwn6SWIFJlYWwtdGltZSBhbmFseXRpY3MgcG93ZXJlZCBieSBBSScsXG4gICAgICAn8J+TiiBDdXN0b21pemFibGUgZGFzaGJvYXJkcyBhbmQgcmVwb3J0cycsXG4gICAgICAn8J+UkCBTZWN1cmUgdXNlciBhY2Nlc3MgYW5kIHJvbGUgbWFuYWdlbWVudCdcbiAgICBdLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1ODA4OTQ5MDgzNjEtOTY3MTk1MDMzMjE1P2F1dG89Zm9ybWF0JmZpdD1jcm9wJnc9ODAwJnE9ODAnXG4gIH1cbl07XG47XG5cbiAgZHluYW1pY0RhdGE6IGFueVtdID0gW107XG59XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNhcmRcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzdGF0aWNEYXRhLmNvbmNhdChkeW5hbWljRGF0YSlcIj5cbiAgICA8aW1nIFtzcmNdPVwiaXRlbS5pbWFnZVwiIGFsdD1cIkNhcmQgaW1hZ2VcIiBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgIDxoMz57eyBpdGVtLnRpdGxlIH19PC9oMz5cbiAgICAgIDxwPnt7IGl0ZW0uZGVzY3JpcHRpb24gfX08L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRlcm1zYW5kY29uZGl0aW9ucycsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVybXNhbmRjb25kaXRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Rlcm1zYW5kY29uZGl0aW9ucy5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBUZXJtc2FuZGNvbmRpdGlvbnNDb21wb25lbnQge1xuXG59XG4iLCI8ZGl2IGNsYXNzPVwidGVybXMtY29udGFpbmVyXCI+XG4gIDxzZWN0aW9uPlxuICAgIDxoMT5UZXJtcyAmIENvbmRpdGlvbnM8L2gxPlxuICAgIDxwPlxuICAgICAgV2VsY29tZSB0byBvdXIgc2VydmljZXMuIEJ5IGFjY2Vzc2luZyBvciB1c2luZyBvdXIgd2Vic2l0ZSwgbW9iaWxlIGFwcHMsIG9yIG90aGVyIGRpZ2l0YWwgc2VydmljZXMsXG4gICAgICB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnkgdGhlc2UgVGVybXMgJiBDb25kaXRpb25zLiBJZiB5b3UgZGlzYWdyZWUgd2l0aCBhbnkgcGFydCBvZiB0aGUgdGVybXMsIHBsZWFzZSBkbyBub3QgdXNlIG91ciBzZXJ2aWNlcy5cbiAgICA8L3A+XG4gICAgPGgyPjEuIFNlcnZpY2VzPC9oMj5cbiAgICA8cD5cbiAgICAgIFdlIGRlc2lnbiBhbmQgZGV2ZWxvcCB3ZWIsIGlPUywgQW5kcm9pZCwgYW5kIGNyb3NzLXBsYXRmb3JtIGFwcGxpY2F0aW9ucy4gQnkgdXNpbmcgb3VyIHNlcnZpY2VzLCB5b3UgYWNrbm93bGVkZ2UgdGhhdCBvdXJcbiAgICAgIHNvbHV0aW9ucyBtYXkgaW5jbHVkZSB0aGlyZC1wYXJ0eSBpbnRlZ3JhdGlvbnMgb3IgcmVxdWlyZSBwbGF0Zm9ybS1zcGVjaWZpYyBwZXJtaXNzaW9ucy5cbiAgICA8L3A+XG4gICAgPGgyPjIuIEludGVsbGVjdHVhbCBQcm9wZXJ0eTwvaDI+XG4gICAgPHA+XG4gICAgICBBbGwgY29udGVudCwgY29kZSwgYW5kIG1hdGVyaWFscyBkZXZlbG9wZWQgYnkgdXMgcmVtYWluIG91ciBpbnRlbGxlY3R1YWwgcHJvcGVydHkgdW5sZXNzIG90aGVyd2lzZSBhZ3JlZWQgaW4gYSB3cml0dGVuIGNvbnRyYWN0LlxuICAgIDwvcD5cbiAgICA8aDI+My4gUGF5bWVudCAmIEJpbGxpbmc8L2gyPlxuICAgIDxwPlxuICAgICAgUGF5bWVudCB0ZXJtcyBhcmUgZGlzY3Vzc2VkIGFuZCBhZ3JlZWQgdXBvbiBiZWZvcmUgcHJvamVjdCBpbml0aWF0aW9uLiBMYXRlIHBheW1lbnRzIG1heSBpbmN1ciBhZGRpdGlvbmFsIGNoYXJnZXMuXG4gICAgPC9wPlxuICAgIDxoMj40LiBMaW1pdGF0aW9uIG9mIExpYWJpbGl0eTwvaDI+XG4gICAgPHA+XG4gICAgICBXZSBhcmUgbm90IGxpYWJsZSBmb3IgYW55IGluZGlyZWN0LCBpbmNpZGVudGFsLCBvciBjb25zZXF1ZW50aWFsIGRhbWFnZXMgYXJpc2luZyBmcm9tIHRoZSB1c2Ugb2Ygb3VyIGFwcGxpY2F0aW9ucyBvciBzZXJ2aWNlcy5cbiAgICA8L3A+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbj5cbiAgICA8aDE+UHJpdmFjeSBQb2xpY3k8L2gxPlxuICAgIDxwPlxuICAgICAgV2UgdmFsdWUgeW91ciBwcml2YWN5LiBUaGlzIHBvbGljeSBleHBsYWlucyBob3cgd2UgY29sbGVjdCwgdXNlLCBhbmQgcHJvdGVjdCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuICAgIDwvcD5cbiAgICA8aDI+MS4gRGF0YSBDb2xsZWN0aW9uPC9oMj5cbiAgICA8cD5cbiAgICAgIFdlIG1heSBjb2xsZWN0IHVzZXIgZGF0YSBzdWNoIGFzIG5hbWVzLCBlbWFpbHMsIGRldmljZSBpbmZvcm1hdGlvbiwgb3IgdXNhZ2Ugc3RhdGlzdGljcyB0byBpbXByb3ZlIHNlcnZpY2UgcXVhbGl0eS5cbiAgICA8L3A+XG4gICAgPGgyPjIuIFVzZSBvZiBJbmZvcm1hdGlvbjwvaDI+XG4gICAgPHA+XG4gICAgICBZb3VyIGRhdGEgaGVscHMgdXMgcGVyc29uYWxpemUgeW91ciBleHBlcmllbmNlLCBlbmhhbmNlIGFwcCBwZXJmb3JtYW5jZSwgYW5kIHByb3ZpZGUgc3VwcG9ydC5cbiAgICA8L3A+XG4gICAgPGgyPjMuIFRoaXJkLXBhcnR5IFNlcnZpY2VzPC9oMj5cbiAgICA8cD5cbiAgICAgIFdlIG1heSB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSB0b29scyAoZS5nLiwgYW5hbHl0aWNzLCBwYXltZW50IGdhdGV3YXlzKS4gVGhlaXIgdXNlIG9mIHlvdXIgZGF0YSBpcyBnb3Zlcm5lZCBieSB0aGVpciBwb2xpY2llcy5cbiAgICA8L3A+XG4gICAgPGgyPjQuIERhdGEgU2VjdXJpdHk8L2gyPlxuICAgIDxwPlxuICAgICAgV2UgaW1wbGVtZW50IHN0cm9uZyBzZWN1cml0eSBtZWFzdXJlcyB0byBwcm90ZWN0IHlvdXIgaW5mb3JtYXRpb24gZnJvbSB1bmF1dGhvcml6ZWQgYWNjZXNzLlxuICAgIDwvcD5cbiAgICA8aDI+NS4gQ29udGFjdDwvaDI+XG4gICAgPHA+XG4gICAgICBGb3IgcXVlc3Rpb25zIGFib3V0IHRoZXNlIHBvbGljaWVzLCBjb250YWN0IHVzIGF0IDxhIGhyZWY9XCJtYWlsdG86dGVhbUB2ZWxvY2l0eXhkZXYuY29tXCI+dGVhbXZlbG9jaXR5eGRlYy5jb208L2E+LlxuICAgIDwvcD5cbiAgPC9zZWN0aW9uPlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXVwY29taW5ncHJvamVjdCcsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vdXBjb21pbmdwcm9qZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3VwY29taW5ncHJvamVjdC5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBVcGNvbWluZ3Byb2plY3RDb21wb25lbnQge1xuXG59XG4iLCI8cD51cGNvbWluZ3Byb2plY3Qgd29ya3MhPC9wPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1ibG9ncycsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vYmxvZ3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vYmxvZ3MuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgQmxvZ3NDb21wb25lbnQge1xuYmxvZ1Bvc3RzID0gW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdGl0bGU6ICdXaHkgWW91ciBCdXNpbmVzcyBOZWVkcyBhIE1vYmlsZSBBcHAgaW4gMjAyNScsXG4gICAgICBzbHVnOiAnbW9iaWxlLWFwcC0yMDI1LWJlbmVmaXRzJyxcbiAgICAgIHN1bW1hcnk6ICdNb2JpbGUgYXBwcyBib29zdCBlbmdhZ2VtZW50LCBpbXByb3ZlIGN1c3RvbWVyIGV4cGVyaWVuY2UsIGFuZCB1bmxvY2sgbmV3IHJldmVudWUgc3RyZWFtcy4nLFxuICAgICAgY29udGVudDogYEluIDIwMjUsIGhhdmluZyBhIG1vYmlsZSBhcHAgaXMgZXNzZW50aWFsLiBCdXNpbmVzc2VzIGxldmVyYWdpbmcgbmF0aXZlIGFuZCBjcm9zcy1wbGF0Zm9ybSBhcHBzIHNlZSBiZXR0ZXIgcGVyZm9ybWFuY2UsIHN0cm9uZ2VyIGN1c3RvbWVyIGxveWFsdHksIGFuZCBlYXNpZXIgc2NhbGFiaWxpdHkuYCxcbiAgICAgIGF1dGhvcjogJ0phbmUgRG9lJyxcbiAgICAgIGRhdGU6ICcyMDI1LTA1LTEwJyxcbiAgICAgIHRhZ3M6IFsnTW9iaWxlJywgJ0J1c2luZXNzJ11cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6ICdUb3AgNSBVSS9VWCBUcmVuZHMgaW4gMjAyNScsXG4gICAgICBzbHVnOiAndG9wLXVpLXV4LXRyZW5kcy0yMDI1JyxcbiAgICAgIHN1bW1hcnk6ICdEaXNjb3ZlciB0aGUgZGVzaWduIHRyZW5kcyBzaGFwaW5nIGRpZ2l0YWwgcHJvZHVjdHMgdGhpcyB5ZWFyLCBmcm9tIHBlcnNvbmFsaXphdGlvbiB0byBhY2Nlc3NpYmlsaXR5LicsXG4gICAgICBjb250ZW50OiBgVXNlciBleHBlcmllbmNlIGlzIGV2b2x2aW5nIHF1aWNrbHkuIFByaW9yaXRpemUgc2ltcGxpY2l0eSwgbW90aW9uIGRlc2lnbiwgZGFyayBtb2RlLCBhbmQgaW5jbHVzaXZlIGludGVyZmFjZXMgZm9yIGJldHRlciByZXN1bHRzLmAsXG4gICAgICBhdXRob3I6ICdKb2huIFNtaXRoJyxcbiAgICAgIGRhdGU6ICcyMDI1LTA0LTI4JyxcbiAgICAgIHRhZ3M6IFsnRGVzaWduJywgJ1VJL1VYJ11cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdGl0bGU6ICdUaGUgRnVsbC1TdGFjayBBZHZhbnRhZ2UnLFxuICAgICAgc2x1ZzogJ2Z1bGwtc3RhY2stZGV2ZWxvcG1lbnQtYmVuZWZpdHMnLFxuICAgICAgc3VtbWFyeTogJ1doeSBmdWxsLXN0YWNrIHRlYW1zIGRlbGl2ZXIgZmFzdGVyIGFuZCBtb3JlIHJlbGlhYmx5IGluIG1vZGVybiBkZXZlbG9wbWVudCBwcm9qZWN0cy4nLFxuICAgICAgY29udGVudDogYEZ1bGwtc3RhY2sgZGV2ZWxvcG1lbnQgcmVkdWNlcyBmcmljdGlvbiBiZXR3ZWVuIGZyb250ZW5kIGFuZCBiYWNrZW5kLiBJdCBlbmFibGVzIGFnaWxlIHdvcmtmbG93cywgZmFzdGVyIGRlcGxveW1lbnQsIGFuZCBjb25zaXN0ZW50IGFyY2hpdGVjdHVyZS5gLFxuICAgICAgYXV0aG9yOiAnQXllc2hhIEtoYW4nLFxuICAgICAgZGF0ZTogJzIwMjUtMDQtMTUnLFxuICAgICAgdGFnczogWydEZXZlbG9wbWVudCcsICdGdWxsLVN0YWNrJ11cbiAgICB9XG4gIF07XG59XG4iLCI8ZGl2IGNsYXNzPVwiYmxvZy1jb250YWluZXJcIj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgcG9zdCBvZiBibG9nUG9zdHNcIiBjbGFzcz1cImJsb2ctY2FyZFwiPlxuICAgIDxoMj57eyBwb3N0LnRpdGxlIH19PC9oMj5cbiAgICA8cCBjbGFzcz1cIm1ldGFcIj57eyBwb3N0LmRhdGUgfX0g4oCUIHt7IHBvc3QuYXV0aG9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwic3VtbWFyeVwiPnt7IHBvc3Quc3VtbWFyeSB9fTwvcD5cbiAgICA8ZGl2IGNsYXNzPVwidGFnc1wiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHRhZyBvZiBwb3N0LnRhZ3NcIiBjbGFzcz1cInRhZ1wiPnt7IHRhZyB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8YSBbcm91dGVyTGlua109XCJbJy9ibG9nJywgcG9zdC5zbHVnXVwiIGNsYXNzPVwicmVhZC1tb3JlXCI+UmVhZCBNb3JlPC9hPlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC13ZWJkZXZlbG9wbWVudCcsXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vd2ViZGV2ZWxvcG1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vd2ViZGV2ZWxvcG1lbnQuY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgV2ViZGV2ZWxvcG1lbnRDb21wb25lbnQge1xuICAgIHNlcnZpY2VzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnV2ViIERldmVsb3BtZW50JyxcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgICdSZXNwb25zaXZlIGRlc2lnbiBmb3IgYWxsIGRldmljZXMnLFxuICAgICAgICAnU0VPICYgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uJyxcbiAgICAgICAgJ0JhY2tlbmQgaW50ZWdyYXRpb24gKEFQSXMsIGRhdGFiYXNlcyknLFxuICAgICAgICAnQ29udGVudCBNYW5hZ2VtZW50IFN5c3RlbXMgKENNUyknLFxuICAgICAgICAnRS1jb21tZXJjZSBmdW5jdGlvbmFsaXR5JyxcbiAgICAgICAgJ0Nyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eSdcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnaU9TIERldmVsb3BtZW50JyxcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgICdTd2lmdC1iYXNlZCBuYXRpdmUgYXBwbGljYXRpb25zJyxcbiAgICAgICAgJ09wdGltaXplZCBmb3IgcGVyZm9ybWFuY2UgJiBiYXR0ZXJ5JyxcbiAgICAgICAgJ0ZhY2UgSUQsIFRvdWNoIElELCBhbmQgU2lyaSBpbnRlZ3JhdGlvbicsXG4gICAgICAgICdBcHAgU3RvcmUgZGVwbG95bWVudCAmIGNvbXBsaWFuY2UnLFxuICAgICAgICAnQ3VzdG9tIGFuaW1hdGlvbnMgYW5kIGdlc3R1cmVzJyxcbiAgICAgICAgJ1NlY3VyZSBzdG9yYWdlIGFuZCBuZXR3b3JraW5nJ1xuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdBbmRyb2lkIERldmVsb3BtZW50JyxcbiAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgICdLb3RsaW4vSmF2YS1iYXNlZCBkZXZlbG9wbWVudCcsXG4gICAgICAgICdNYXRlcmlhbCBEZXNpZ24gVUkvVVgnLFxuICAgICAgICAnR29vZ2xlIFBsYXkgU3RvcmUgZGVwbG95bWVudCcsXG4gICAgICAgICdQdXNoIG5vdGlmaWNhdGlvbnMgYW5kIEZpcmViYXNlJyxcbiAgICAgICAgJ0RldmljZSBjb21wYXRpYmlsaXR5ICYgdGVzdGluZycsXG4gICAgICAgICdCYXR0ZXJ5LWVmZmljaWVudCBiYWNrZ3JvdW5kIHRhc2tzJ1xuICAgICAgXVxuICAgIH1cbiAgXTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jYXJkXCI+XG4gICAgPGgyPldlYiBEZXZlbG9wbWVudCBTZXJ2aWNlczwvaDI+XG4gICAgPHAgY2xhc3M9XCJpbnRyb1wiPlxuICAgICAgV2UgY3JhZnQgc2NhbGFibGUsIHBlcmZvcm1hbnQsIGFuZCB2aXN1YWxseSBlbmdhZ2luZyB3ZWJzaXRlcyB0aGF0IGFkYXB0IHBlcmZlY3RseSB0byBhbGwgZGV2aWNlcyBhbmQgc2NyZWVuIHNpemVzLlxuICAgIDwvcD5cbiAgICA8dWw+XG4gICAgICA8bGk+PHN0cm9uZz5Nb2Rlcm4gVUkvVVg6PC9zdHJvbmc+IEludHVpdGl2ZSBpbnRlcmZhY2VzIHdpdGggdG9wLW5vdGNoIHJlc3BvbnNpdmVuZXNzLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5TY2FsYWJsZSBBcmNoaXRlY3R1cmU6PC9zdHJvbmc+IEJ1aWx0IHdpdGggbW9kdWxhciwgZnV0dXJlLXJlYWR5IGZyYW1ld29ya3MuPC9saT5cbiAgICAgIDxsaT48c3Ryb25nPkZ1bGwtU3RhY2sgU29sdXRpb25zOjwvc3Ryb25nPiBGcm9udGVuZCwgYmFja2VuZCAmIGRhdGFiYXNlIGludGVncmF0aW9uLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5QZXJmb3JtYW5jZSBGb2N1c2VkOjwvc3Ryb25nPiBGYXN0LWxvYWRpbmcsIFNFTy1vcHRpbWl6ZWQgd2ViIHBhZ2VzLjwvbGk+XG4gICAgICA8bGk+PHN0cm9uZz5BZG1pbiAmIERhc2hib2FyZHM6PC9zdHJvbmc+IFBvd2VyZnVsLCBzZWN1cmUgdG9vbHMgZm9yIHlvdXIgdGVhbS48L2xpPlxuICAgIDwvdWw+XG4gIDwvZGl2PlxuPC9kaXY+XG48IS0tIEJsb2NrIDIgLS0+XG4gIiwiLy8gc3JjL2FwcC9hdXRoLmludGVyY2VwdG9yLnRzXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnRcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgaW50ZXJjZXB0KHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgY29uc3QgdG9rZW4gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBjb25zdCBhdXRoUmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGF1dGhSZXEpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXEpO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxTQUFTLHVCQUF1Qjs7O0FDQWhDLFNBQVMsWUFBQUEsaUJBQWdCO0FBQ3pCLFNBQVMsZUFBZSx3QkFBd0IsdUJBQXVCOzs7QUNEdkUsU0FBUyxnQkFBZ0I7QUFDekIsU0FBUyxvQkFBNEI7OztBQ0RyQyxTQUFTLGFBQUFDLG1CQUFpQjtBQUMxQixTQUFpQyxjQUFBQyxtQkFBa0I7Ozs7O0FFRG5EOzs7O1NBQVMsa0JBQWtCO0FBQzNCLFNBQXFCLG1CQUFtQjtBQUN4QyxTQUFvQixXQUFXOzs7QUFPekIsSUFBTyxpQkFBUCxNQUFPLGdCQUFjO0VBZ0JMO0VBZlosZUFBZTs7RUFDZixlQUFlOztFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7O0VBR3JCLDRCQUEwQjtFQUMxQiw0QkFBMEI7RUFDMUIsNEJBQTBCOztFQUkxQixvQkFBa0I7RUFDbEIsNkJBQTJCO0VBRW5DLFlBQW9CLE1BQWdCO0FBQWhCLFNBQUEsT0FBQTtFQUFtQjtFQUV2QyxhQUFVO0FBQ1IsVUFBTSxVQUFVLEtBQUssZUFBYztBQUNuQyxXQUFPLEtBQUssS0FBSyxJQUFjLEtBQUssY0FBYyxFQUFFLFFBQU8sQ0FBRTtFQUMvRDs7RUFFQSxhQUFhLElBQVU7QUFDckIsVUFBTSxVQUFVLEtBQUssZUFBYztBQUNuQyxXQUFPLEtBQUssS0FBSyxPQUFhLEdBQUcsS0FBSyxrQkFBa0IsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFPLENBQUU7RUFDL0U7O0VBRUEsVUFBVSxRQUFjO0FBQ3RCLFVBQU0sVUFBVSxJQUFJLFlBQVksRUFBRSxnQkFBZ0IsbUJBQWtCLENBQUU7QUFDdEUsV0FBTyxL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RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBSmxCO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFBYyxHQUFBLENBQUEsZUFBQSxtQkFBQSxtQkFBQSxjQUFBLGVBQUEsaUJBQUEsaUJBQUEsbUJBQUEsa0JBQUEsY0FBQSxvQkFBQSxvQkFBQSxnQkFBQSxDQUFBO21DQVRkLGlCQUFlO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFMZjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQWMsR0FBQSxDQUFBLGVBQUEsbUJBQUEsbUJBQUEsY0FBQSxlQUFBLGlCQUFBLGlCQUFBLG1CQUFBLGtCQUFBLGNBQUEsb0JBQUEsb0JBQUEsZ0JBQUEsQ0FBQTttQ0FSZCxpQkFBZTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBTmY7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBUGQsa0JBQWdCO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFQaEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBTmQsa0JBQWdCO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFSaEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBTGQsNEJBQTBCO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFUMUI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBSmQsY0FBWTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBVlo7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBSGQsMkJBQXlCO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFYekI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUVBO0VBQ0E7RUFDQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBRmQsNkJBQTJCO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFaM0I7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUE7RUFDQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBRGQsMEJBQXdCO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFieEI7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtBQUFjLEdBQUEsQ0FBQSxlQUFBLG1CQUFBLG1CQUFBLGNBQUEsZUFBQSxpQkFBQSxpQkFBQSxtQkFBQSxrQkFBQSxjQUFBLG9CQUFBLG9CQUFBLGdCQUFBLENBQUE7bUNBQWQsZ0JBQWM7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQWRkO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFBd0IsR0FBQSxDQUFBLGVBQUEsbUJBQUEsbUJBQUEsY0FBQSxlQUFBLGlCQUFBLGlCQUFBLG1CQUFBLGtCQUFBLGNBQUEsb0JBQUEsb0JBQUEsZ0JBQUEsQ0FBQTs7O0FEdEM1QixnQkFBZSxFQUFHLGdCQUFnQixXQUFXO0VBQzNDLHVCQUF1QjtDQUN4QixFQUNFLE1BQU0sU0FBTyxRQUFRLE1BQU0sR0FBRyxDQUFDOyIsIm5hbWVzIjpbIk5nTW9kdWxlIiwiQ29tcG9uZW50IiwiVmFsaWRhdG9ycyIsImkwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsIkNvbXBvbmVudCIsIlZhbGlkYXRvcnMiLCJpMCIsImkxIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJpMCIsIkNvbXBvbmVudCIsImkwIiwiQ29tcG9uZW50IiwiaTAiLCJDb21wb25lbnQiLCJfYzAiLCJpMCIsIlZhbGlkYXRvcnMiLCJDb21wb25lbnQiLCJpMCIsImkzIiwiaTEiLCJDb21wb25lbnQiLCJpMCIsIkluamVjdGFibGUiLCJOZ01vZHVsZSJdfQ==