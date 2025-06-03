import ResumeContent from './components/ResumeContent.vue';
import ProfileCard from './components/ProfileCard.vue';
import PostsCard from './components/PostsCard.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-gray-100" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container mx-auto py-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid grid-cols-4 sm:grid-cols-12 gap-6 px-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-span-4 sm:col-span-3" },
});
/** @type {[typeof ProfileCard, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(ProfileCard, new ProfileCard({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof PostsCard, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(PostsCard, new PostsCard({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-span-4 sm:col-span-9" },
});
/** @type {[typeof ResumeContent, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(ResumeContent, new ResumeContent({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-12']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:col-span-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:col-span-9']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ResumeContent: ResumeContent,
            ProfileCard: ProfileCard,
            PostsCard: PostsCard,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
