import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);

  if (!product) {
    response.status(404).end("Product not found");
  }

  response.status(200).json(product);
}
