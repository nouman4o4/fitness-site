export default function FormSectionSkeleton() {
  return (
    <section className="py-24 bg-background animate-pulse">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Side Skeleton */}
          <div className="lg:col-span-1 space-y-12">
            {/* Heading */}
            <div className="space-y-6">
              <div className="h-8 w-3/4 bg-surface-2 rounded" />
              <div className="h-4 w-full bg-surface-2 rounded" />
              <div className="h-4 w-5/6 bg-surface-2 rounded" />
            </div>

            {/* Features */}
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-6 w-6 bg-surface-2 rounded" />
                  <div className="space-y-2 w-full">
                    <div className="h-4 w-1/2 bg-surface-2 rounded" />
                    <div className="h-3 w-3/4 bg-surface-2 rounded" />
                  </div>
                </div>
              ))}
            </div>

            {/* Quote Box */}
            <div className="p-8 bg-surface-2 border border-border space-y-4">
              <div className="h-4 w-24 bg-background rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-background rounded" />
                <div className="h-3 w-5/6 bg-background rounded" />
              </div>
              <div className="h-3 w-32 bg-background rounded" />
            </div>
          </div>

          {/* Right Side Skeleton (Form) */}
          <div className="lg:col-span-2">
            <div className="bg-surface-2 border border-border p-8 md:p-12 shadow-2xl space-y-10">
              {/* Group Skeleton */}
              {[...Array(4)].map((_, groupIndex) => (
                <div key={groupIndex} className="space-y-6">
                  {/* Section Title */}
                  <div className="h-5 w-1/3 bg-background border-b border-border pb-4" />

                  {/* Inputs Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(groupIndex === 2 ? 1 : 2)].map((__, i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-3 w-24 bg-background rounded" />
                        <div className="h-12 w-full bg-background border border-border rounded-none" />
                      </div>
                    ))}
                  </div>

                  {/* Special cases */}
                  {groupIndex === 2 && (
                    <div className="h-12 w-full md:w-1/2 bg-background border border-border rounded-none" />
                  )}

                  {groupIndex === 3 && (
                    <div className="h-24 w-full bg-background border border-border rounded-none" />
                  )}
                </div>
              ))}

              {/* Button */}
              <div className="pt-6 space-y-4">
                <div className="h-16 w-full bg-orange/60 rounded-none" />
                <div className="h-3 w-2/3 mx-auto bg-background rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
