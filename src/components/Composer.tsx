const Composer = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-6 py-12">
      {/* Left side with photo */}
      <div className="flex w-1/2 flex-col items-center justify-center rounded-lg border border-border bg-gradient-to-br from-red-500 to-red-600 p-6">
        <div className="mb-4 h-64 w-64 overflow-hidden rounded-full border-4 border-white/20 shadow-xl">
          <img 
            src="../../public/2.jpg" 
            alt="Farah Karia" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-medium text-white/80">✨ Welcome to my world ✨</h3>
        </div>
      </div>

      {/* Right side with about me info */}
      <div className="flex w-1/2 flex-col justify-center rounded-lg border border-border bg-gradient-to-br from-card to-card/90 p-10">
        <h2 className="mb-4 text-3xl font-bold text-foreground">
          Salut, c'est Farah! 👋
        </h2>
        
        <div className="space-y-4 text-muted-foreground">
          <p className="flex items-center gap-2">
            <span className="text-xl">📍</span> 
            <span>J'habite à <span className="font-semibold text-foreground">Kelibia</span>, une magnifique ville côtière</span>
          </p>
          
          <p className="flex items-center gap-2">
            <span className="text-xl">🎂</span> 
            <span>J'ai <span className="font-semibold text-foreground">19 ans</span> et pleine d'énergie</span>
          </p>
          
          <p className="flex items-center gap-2">
            <span className="text-xl">💼</span> 
            <span>Étudiante passionnée par le <span className="font-semibold text-foreground">développement web</span></span>
          </p>
          
          <p className="flex items-center gap-2">
            <span className="text-xl">🌊</span> 
            <span>Amoureuse de la mer et de la plage de Kelibia</span>
          </p>
          
          <p className="flex items-center gap-2">
            <span className="text-xl">🎯</span> 
            <span>Objectif : Devenir une développeuse web talentueuse</span>
          </p>
        </div>

        <div className="mt-6 flex gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">#ambitieuse</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">#créative</span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">#passionnée</span>
        </div>
      </div>
    </section>
  );
};

export default Composer;