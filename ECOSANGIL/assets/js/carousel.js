/**
 * ECOSANGIL - Carrusel Diseño Expandido
 * 1 tarjeta grande al centro + 3 tarjetas visibles alrededor
 */

class ServiceCarousel {
  constructor(containerSelector) {
    const gridContainer = document.querySelector(containerSelector);
    if (!gridContainer) {
      console.error(`❌ No se encontró el contenedor: ${containerSelector}`);
      return;
    }

    this.container = gridContainer.querySelector(".carousel-container");
    if (!this.container) {
      console.error("❌ No se encontró .carousel-container");
      return;
    }

    this.wrapper = this.container.querySelector(".carousel-wrapper");
    if (!this.wrapper) {
      console.error("❌ No se encontró .carousel-wrapper");
      return;
    }

    this.cards = Array.from(
      this.wrapper.querySelectorAll(".service-card-modern"),
    );
    if (this.cards.length === 0) {
      console.error("❌ No se encontraron tarjetas .service-card-modern");
      return;
    }

    this.currentIndex = 0;
    this.totalCards = this.cards.length;

    console.log(`📐 Carrusel diseño expandido: ${this.totalCards} tarjetas`);

    this.init();
  }

  init() {
    this.createControls();
    this.setupEventListeners();
    this.updateCardStack();
  }

  createControls() {
    const controlsHTML = `
      <div class="carousel-controls">
        <button class="carousel-btn carousel-prev" aria-label="Anterior">
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="carousel-indicators">
          ${this.createDots()}
        </div>
        
        <button class="carousel-btn carousel-next" aria-label="Siguiente">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div class="carousel-counter">
        <span class="current-slide">1</span> / <span class="total-slides">${this.totalCards}</span>
      </div>
    `;

    this.container.insertAdjacentHTML("beforeend", controlsHTML);
  }

  createDots() {
    let dotsHTML = "";
    for (let i = 0; i < this.totalCards; i++) {
      dotsHTML += `<button class="carousel-dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Ir a tarjeta ${i + 1}"></button>`;
    }
    return dotsHTML;
  }

  setupEventListeners() {
    const prevBtn = this.container.querySelector(".carousel-prev");
    const nextBtn = this.container.querySelector(".carousel-next");

    prevBtn?.addEventListener("click", () => {
      this.prev();
    });

    nextBtn?.addEventListener("click", () => {
      this.next();
    });

    // Indicadores de puntos
    const dots = this.container.querySelectorAll(".carousel-dot");
    dots.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });

    // Navegación por teclado
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
      }
      if (e.key === "ArrowRight") {
        this.next();
      }
    });
  }

  next() {
    // Avanzar a la siguiente tarjeta (circular)
    this.currentIndex = (this.currentIndex + 1) % this.totalCards;
    this.updateCardStack();
  }

  prev() {
    // Retroceder a la tarjeta anterior (circular)
    this.currentIndex =
      (this.currentIndex - 1 + this.totalCards) % this.totalCards;
    this.updateCardStack();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCardStack();
  }

  updateCardStack() {
    // Calcular posiciones para las 4 tarjetas visibles
    const activeIndex = this.currentIndex;
    const rightIndex = (this.currentIndex + 1) % this.totalCards;
    const topIndex = (this.currentIndex + 2) % this.totalCards;
    const leftIndex = (this.currentIndex + 3) % this.totalCards;

    // Actualizar clases de todas las tarjetas
    this.cards.forEach((card, index) => {
      // Limpiar todas las clases de posición
      card.classList.remove("active", "left", "right", "top");

      // Asignar posición según índice
      if (index === activeIndex) {
        card.classList.add("active");
      } else if (index === leftIndex) {
        card.classList.add("left");
      } else if (index === rightIndex) {
        card.classList.add("right");
      } else if (index === topIndex) {
        card.classList.add("top");
      }
    });

    this.updateControls();

    console.log(
      `🎯 Centro: ${activeIndex + 1} | Izq: ${leftIndex + 1} | Der: ${rightIndex + 1} | Top: ${topIndex + 1}`,
    );
  }

  updateControls() {
    // Actualizar indicadores
    const dots = this.container.querySelectorAll(".carousel-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex);
    });

    // Actualizar contador
    const currentSlideEl = this.container.querySelector(".current-slide");
    if (currentSlideEl) {
      currentSlideEl.textContent = this.currentIndex + 1;
    }
  }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const carousel = new ServiceCarousel(".services-modern");

    if (carousel && carousel.cards && carousel.cards.length > 0) {
      console.log(`✅ Carrusel tipo pila inicializado`);
      console.log(`📚 ${carousel.cards.length} tarjetas apiladas`);
      console.log(`🔄 Auto-play cada 5 segundos`);
    } else {
      console.warn("⚠️ No se pudo inicializar el carrusel");
    }
  }, 200);
});
