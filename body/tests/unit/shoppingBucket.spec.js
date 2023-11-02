import { shallowMount } from "@vue/test-utils";
import ShoppingBucket from "@/components/ShoppingBucket.vue";

describe("ShoppingBucket", () => {
  it("renders props.bucketItem when passed", () => {
    const bucketItem = {
      name: "Sample Product",
      description: "Sample product description",
      price: 10.99,
      image: "https://via.placeholder.com/150",
      rating: 4,
      quantity: 2,
    };

    const wrapper = shallowMount(ShoppingBucket, {
      propsData: {
        bucketItem,
        removeGroupFromBasket: jest.fn(),
        addItemToBasket: jest.fn(),
        removeItemFromBasket: jest.fn(),
      },
    });

    expect(wrapper.text()).toContain(bucketItem.name);
    expect(wrapper.text()).toContain(bucketItem.description);
    expect(wrapper.text()).toContain(`${bucketItem.price} $`);
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://via.placeholder.com/150"
    );
    expect(wrapper.find(".fa-minus").exists()).toBe(true);
    expect(wrapper.find(".fa-plus").exists()).toBe(true);
  });

  it('triggers the removeGroupFromBasket method when the "Remove from Basket" button is clicked', () => {
    const bucketItem = {
      name: "Product 1",
      rating: 4,
      description: "Sample description",
      price: 29.99,
      image: "https://via.placeholder.com/150",
      quantity: 1,
    };
    const removeGroupFromBasket = jest.fn();
    const propsData = {
      bucketItem,
      removeGroupFromBasket,
      addItemToBasket: jest.fn(),
      removeItemFromBasket: jest.fn(),
    };
    const wrapper = shallowMount(ShoppingBucket, {
      propsData,
    });

    const removeButton = wrapper.find(".fa-minus");
    removeButton.trigger("click");

    expect(propsData.removeItemFromBasket).toHaveBeenCalledTimes(1);
    expect(propsData.removeItemFromBasket).toHaveBeenCalledWith(bucketItem);
  });
});
