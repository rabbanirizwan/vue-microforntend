import { shallowMount, createLocalVue } from "@vue/test-utils";
import CategoryCard from "@/components/CategoryCard.vue";

const localVue = createLocalVue();

describe("CategoryCard.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CategoryCard, {
      localVue,
    });
  });

  it("renders props when passed", () => {
    expect(wrapper.text()).toContain("Electronics");
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("renders the component with products", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll(".parent").length).toBe(8);
  });
});
