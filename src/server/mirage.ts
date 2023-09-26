import { Server, Response } from "miragejs";
import data from "@/server/data.json";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    environment,

    routes() {
      this.namespace = "api";

      this.get("/data", () => {
        try {
          return new Response(200, {}, JSON.stringify(data));
        } catch (error) {
          return new Response(500, {}, { error: "Erro ao carregar data" });
        }
      });
    },
  });
}
