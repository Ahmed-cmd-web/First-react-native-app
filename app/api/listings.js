/** @format */

import api from "./client";
import FormData from "form-data";
import { useState } from "react";
const endpoint = "/listings";

const listings = () => api.get(endpoint);
const add = (props, handle) => {
  if (props) {
    const form = new FormData();
    form.append("categoryId", props.categoryId);
    form.append("title", props.title);
    form.append("price", props.price);
    form.append("description", props.description);
    form.append(
      "location",
      props.location
        ? JSON.stringify({
            latitude: props.location.coords.latitude,
            longitude: props.location.coords.longitude,
          })
        : JSON.stringify({
            latitude: 0,
            longitude: 0,
          })
    );
    props.img.forEach((i) =>
      form.append("images", {
        name: props.title,
        type: "image/jpeg",
        uri: i,
      })
    );
    // form.append("images", {
    //   uri:
    //     "https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73726/world.topo.bathy.200406.3x21600x10800.png",
    //   name: props.title,
    //   type: "image/png",
    // });

    const config = {
      onUploadProgress: async (progressEvent) => {
        var percentCompleted = progressEvent.loaded / progressEvent.total;
        handle(percentCompleted);
      },
    };

    // const [progress, setprogress] = useState(0);

    return api.post(endpoint, form, config);
  }
};

export default { listings, add };
