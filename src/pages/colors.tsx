import * as React from "react"
import { PageProps } from "@/definitions"
import { Layout, Container, Seo } from "@/components"

const Colors: React.FC<PageProps> = ({ location }) => {
  const siteTitle = `Colors`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Fiskaly Colors" />
      <Container>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div>
            <h2 className="my-8">Brand</h2>
            <ol className="flex">
              <li className="bg-skin-primary border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-secondary border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
            </ol>
          </div>
          <div>
            <h2 className="my-8">Backgrounds</h2>
            <ol className="flex">
              <li className="bg-skin-base border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-base-muted border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-focus border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2">
                <span className="text-fg-focus text-xs">Focus</span>
              </li>
            </ol>
          </div>
          <div>
            <h2 className="my-8">Text</h2>
            <ol className="flex">
              <li className="bg-skin-fg border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
              <li className="bg-skin-fg-muted border inline-flex items-center justify-center rounded-full w-16 h-16 mr-2"></li>
            </ol>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default Colors
