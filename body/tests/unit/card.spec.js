import { shallowMount, createLocalVue } from "@vue/test-utils";
import BodyContent from "@/components/Card.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Card.vue", () => {
  let store;
  let wrapper;
  const mockStore = {
    state: {
      cart: [],
    },
    mutations: {
      addToCart(state, product) {
        state.cart.push(product);
      },
    },
  };

  beforeEach(() => {
    store = new Vuex.Store(mockStore);
    wrapper = shallowMount(BodyContent, {
      localVue,
      store,
    });
  });

  it("renders props when passed", () => {
    expect(wrapper.text()).toContain("Product 2");
    expect(wrapper.text()).toContain("Description for Product 1");
    expect(wrapper.text()).toContain("$99.99");
    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://via.placeholder.com/150"
    );
  });

  it('renders the component with products', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll('.bg-gray-100').length).toBe(12);
  });

  it('adds a product to the cart when the "Add to Cart" button is clicked', async () => {
    const addButton = wrapper.find('.bg-yellow-500');
    addButton.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$store.state.cart).toHaveLength(1);
  });
});
