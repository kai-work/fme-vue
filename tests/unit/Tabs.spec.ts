import { shallow } from "@vue/test-utils";
import Tabs from "@/components/Tabs.vue";
import { IApiService } from "@/common/i.api.service";

jest.mock("@/common/api.service");

describe("Tabs.vue", () => {
  it("changes tab when clicked on it", () => {

    const wrapper = shallow(Tabs, {
        data: {
            tabs: ['a-tab', 'b-tab']
        }
    });
    const selectTabMock = jest.fn();
    wrapper.setMethods({ selectTab: selectTabMock });
    wrapper.find("a").trigger("click");
    expect(selectTabMock.mock.calls.length).toBe(1)
  });
});
